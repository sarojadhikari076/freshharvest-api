import { shipping } from '../constants/app'
import Cart from '../models/cart.model'
import Order from '../models/order.model'
import Product from '../models/product.model'
import asyncWrapper from '../utils/asyncWrapper'
import { v4 as uuid } from 'uuid'

// Get the current user's orders
export const getOrders = asyncWrapper(async (req, res) => {
  const orders = await Order.find({ user: req.headers.userId }).populate('products.product')

  res.status(200).json({ orders })
})

// Create a new order
export const createOrder = asyncWrapper(async (req, res) => {
  const cart = await Cart.findOne({ user: req.headers.userId }).populate('products.product')
  if (cart === null) throw new Error('CartNotFoundError')

  // Decrease the available quantity of each product in the cart
  const products = await Promise.all(
    cart.products.map(async p => {
      const product = await Product.findById(p.product._id)
      if (product === null) throw new Error('ProductNotFoundError')
      if (product.availableQuantity < p.quantity) throw new Error('QuantityNotAvailableError')

      product.availableQuantity -= p.quantity
      await product.save()

      return { product: p.product, quantity: p.quantity, price: product.price }
    })
  )

  // Calculate the total amount and shipping fee
  const totalAmount = +(
    products.reduce((acc, p) => acc + p.price * p.quantity, 0) + shipping
  ).toFixed(2)

  const shippingFee = shipping

  // Generate a 5 character order ID
  const id = uuid().slice(5, 10)

  const order = await Order.create({
    user: req.headers.userId,
    products,
    totalAmount,
    shippingFee,
    id
  })

  // Clear the user's cart
  await cart.updateOne({ products: [] }).exec()

  res.status(201).json({ order })
})

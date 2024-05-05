import { shipping } from '../constants/app'
import Cart from '../models/cart.model'
import Product from '../models/product.model'
import asyncWrapper from '../utils/asyncWrapper'
import { getClientSecret } from '../utils/stripe'

// Get the current user's cart
export const getCart = asyncWrapper(async (req, res) => {
  const cart = await Cart.findOne({ user: req.headers.userId }).populate(
    'products.product'
  )

  res.status(200).json({ cart })
})

// Add a product to the current user's cart
export const addToCart = asyncWrapper(async (req, res, next) => {
  const { productId, quantity } = req.body
  const cart = await Cart.findOne({ user: req.headers.userId })

  // If the product ID is not provided, return an error
  if (productId === undefined)
    return next({ message: 'Product ID is required', statusCode: 400 })

  // If available quantity is less than the quantity requested, return an error
  const product = await Product.findById(productId)
  if (product === null)
    return next({ message: 'Product not found', statusCode: 404 })

  if (product.availableQuantity < quantity)
    return next({ message: 'Quantity not available', statusCode: 400 })

  // If the cart does not exist, create a new cart
  if (cart === null) {
    const newCart = await Cart.create({
      user: req.headers.userId,
      products: [{ product: productId, quantity }]
    })
    return res.status(201).json({ cart: newCart })
  }

  // If the cart exists, check if the product is already in the cart
  const productIndex = cart.products.findIndex(
    p => p.product.toString() === productId
  )
  if (productIndex === -1) {
    cart.products.push({ product: productId, quantity })
  } else {
    cart.products[productIndex].quantity += quantity
  }

  await cart.save()
  res.status(200).json({ cart })
})

// Remove a product from the current user's cart
export const removeFromCart = asyncWrapper(async (req, res, next) => {
  const { product } = req.body
  const cart = await Cart.findOne({ user: req.headers.userId })

  // If the cart does not exist, return an error
  if (cart === null) return next({ message: 'Cart not found', statusCode: 404 })

  // If the product is not in the cart, return an error
  const productIndex = cart.products.findIndex(
    p => p.product.toString() === product
  )
  if (productIndex === -1)
    return next({ message: 'Product not found', statusCode: 404 })

  cart.products.splice(productIndex, 1)
  await cart.save()
  res.status(200).json({ cart })
})

// Get cart summary
export const getCartSummary = asyncWrapper(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.headers.userId })
    .populate('products.product')
    .lean()

  if (cart === null) return next({ message: 'Cart not found', statusCode: 404 })

  // Calculate the total, subtotal, and shipping
  const subtotal = +cart.products
    .reduce(
      // @ts-ignore
      (acc, product) => acc + product.product.price * product.quantity,
      0
    )
    .toFixed(2)

  const total = +(subtotal + shipping).toFixed(2)

  const clientSecret = await getClientSecret(total)

  res.status(200).json({ total, subtotal, shipping, clientSecret })
})

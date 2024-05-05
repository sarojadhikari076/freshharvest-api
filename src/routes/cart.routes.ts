import { Router } from 'express'
import {
  getCart,
  addToCart,
  removeFromCart,
  getCartSummary
} from '../controllers/cart.controllers'
import { authenticate } from '../middlewares/auth.middlewares'

const cartRouter = Router()

// Only authenticated users can access the cart
cartRouter.use(authenticate)
cartRouter.route('/').get(getCart).post(addToCart).delete(removeFromCart)
cartRouter.get('/summary', getCartSummary)

export default cartRouter

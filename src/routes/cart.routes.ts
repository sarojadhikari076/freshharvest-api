import { Router } from 'express'
import { getCart, addToCart, removeFromCart, getCartSummary } from '../controllers/cart.controllers'
import { authenticate } from '../controllers/auth.controllers'

const cartRouter = Router()

cartRouter.use(authenticate)
cartRouter.route('/').get(getCart).post(addToCart).delete(removeFromCart)

cartRouter.get('/summary', getCartSummary)

export default cartRouter

import { Router } from 'express'
import { getOrders, createOrder } from '../controllers/order.controllers'
import { authenticate } from '../middlewares/auth.middlewares'

const orderRouter = Router()

orderRouter.use(authenticate)
orderRouter.route('/').get(getOrders).post(createOrder)

export default orderRouter

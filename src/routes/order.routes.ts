import { Router } from 'express'
import { getOrders, createOrder } from '../controllers/order.controllers'
import { authenticate } from '../controllers/auth.controllers'

const orderRouter = Router()

orderRouter.use(authenticate)
orderRouter.route('/').get(getOrders).post(createOrder)

export default orderRouter

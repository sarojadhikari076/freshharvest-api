import { Router } from 'express'
import productRouter from './product.routes'
import faqRouter from './faq.routes'
import authRouter from './auth.routes'
import cartRouter from './cart.routes'
import orderRouter from './order.routes'
import asyncWrapper from '../utils/asyncWrapper'

const router = Router()

// Welcome route for checking if the API is running
router.get(
  '/',
  asyncWrapper(async (_, res) => {
    res.status(200).json({
      message: 'Welcome to FreshHarvest FAQs API'
    })
  })
)

router.use('/auth', authRouter)
router.use('/carts', cartRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)
router.use('/faqs', faqRouter)

export default router

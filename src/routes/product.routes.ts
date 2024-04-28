import { Router } from 'express'

import {
  getProducts,
  getProductBySlug,
  getFeaturedProducts,
  bestSellingProducts,
  getSubCategories
} from '../controllers/product.controllers'

const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/featured', getFeaturedProducts)
productRouter.get('/best-selling', bestSellingProducts)
productRouter.get('/sub-categories', getSubCategories)

productRouter.get('/:slug', getProductBySlug)

export default productRouter

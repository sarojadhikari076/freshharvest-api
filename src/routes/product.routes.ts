import { Router } from 'express'

import {
  getProducts,
  getProductBySlug,
  getFeaturedProducts,
  bestSellingProducts,
  getSubCategories,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controllers'
import { authenticate, authorize } from '../middlewares/auth.middlewares'

const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/featured', getFeaturedProducts)
productRouter.get('/best-selling', bestSellingProducts)
productRouter.get('/sub-categories', getSubCategories)

productRouter.get('/:slug', getProductBySlug)

// Only admin can create, update, and delete products
productRouter.use(authenticate, authorize)
productRouter.post('/', createProduct)
productRouter.patch('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter

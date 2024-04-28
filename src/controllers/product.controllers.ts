import Product from '../models/product.model'
import ProductReview from '../models/productReview.model'
import asyncWrapper from '../utils/asyncWrapper'

// Get all products
export const getProducts = asyncWrapper(async (req, res) => {
  // Pagination, sorting, filtering
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
  const page = req.query.page ? parseInt(req.query.page as string) : 1
  const sort = req.query.sort ? (req.query.sort as string) : 'createdAt'

  // Sort order
  const priceRange = ((req.query.priceRange || '0,10000') as string).split(',')

  // Filtering by category, sub-categories, and search query
  const category = req.query.category ? (req.query.category as string) : undefined
  const subCategories = ((req.query.subCategories || '') as string).split(',')
  const query = req.query.query ? (req.query.query as string) : ''

  const products = await Product.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { shortDescription: { $regex: query, $options: 'i' } },
      { longDescription: { $regex: query, $options: 'i' } }
    ],
    ...(category ? { category } : {}),
    ...(subCategories.length > 1 ? { subCategory: { $in: subCategories } } : {}),
    price: { $gte: parseInt(priceRange[0]), $lte: parseInt(priceRange[1]) }
  })
    .limit(limit)
    .skip(limit * (page - 1))
    .sort(sort)

  res.status(200).json({ products })
})

// Get a product by slug
export const getProductBySlug = asyncWrapper(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })

  if (product === null) throw new Error('NotFoundError')

  const reviews = await ProductReview.find({ product: product._id }).populate('user')
  const similarProducts = await Product.find({ category: product.category }).limit(10)
  res.status(200).json({ product, similarProducts, reviews })
})

// Get a product by ID
export const getProductById = asyncWrapper(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product === null) throw new Error('NotFoundError')
  res.status(200).json({ product })
})

// Get featured products
export const getFeaturedProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({ reviewCount: { $gte: 10 } }).limit(10)
  res.status(200).json({ products })
})

// Get best-selling products
export const bestSellingProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({ averageRating: { $gte: 4 } }).limit(10)
  res.status(200).json({ products })
})

// Get sub-categories
export const getSubCategories = asyncWrapper(async (req, res) => {
  const subCategories = await Product.distinct('subCategory')
  res.status(200).json({ subCategories })
})

// Create a new product
export const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({ product })
})

// Update a product
export const updateProduct = asyncWrapper(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (product === null) throw new Error('NotFoundError')
  res.status(200).json({ product })
})

// Delete a product
export const deleteProduct = asyncWrapper(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
  if (product === null) throw new Error('NotFoundError')
  res.status(204).end()
})

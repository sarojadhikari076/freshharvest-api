import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const productSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    category: { type: String, required: true, enum: ['fruits', 'vegetables'] },
    subCategory: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    unit: { type: String, required: true },
    thumbnail: { type: String, required: true },
    availableQuantity: { type: Number, required: true, min: 0 },
    averageRating: { type: Number, required: true, min: 0, max: 5 },
    reviewCount: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
)

// Slugify the product name before saving
productSchema.pre('save', function (next) {
  const product = this
  product.slug = slugify(product.name, {
    lower: true,
    strict: true,
    trim: true
  })

  next()
})

const Product = model('Product', productSchema)
export default Product

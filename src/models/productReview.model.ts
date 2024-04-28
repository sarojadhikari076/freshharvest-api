import { Schema, model } from 'mongoose'

const productReviewSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
  },
  { timestamps: true }
)

const ProductReview = model('ProductReview', productReviewSchema)
export default ProductReview

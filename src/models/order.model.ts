import { Schema, model } from 'mongoose'

const orderSchema = new Schema(
  {
    id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true, min: 1 }
      }
    ],
    shippingFee: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      required: true,
      default: 'Pending',
      enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled', 'Rejected']
    },
    totalAmount: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
)

const Order = model('Order', orderSchema)
export default Order

import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
    designation: { type: String, required: true, default: 'Customer' },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'staff', 'customer'],
      default: 'customer'
    }
  },
  { timestamps: true }
)

const User = model('User', userSchema)
export default User

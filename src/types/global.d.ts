// Express request with user

import mongoose from 'mongoose'

export {}

declare global {
  namespace Express {
    export interface Request {
      user: {
        _id: mongoose.Types.ObjectId
      }
    }
  }
}

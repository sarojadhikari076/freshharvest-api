import User from '../models/user.model'
import asyncWrapper from '../utils/asyncWrapper'
import { verify } from 'jsonwebtoken'

// Authenticate a user
export const authenticate = asyncWrapper(async (req, _, next) => {
  // Get the token from authorization header
  const token = req.headers.authorization?.split(' ')[1]

  // If the token does not exist, return an error
  if (token === undefined)
    return next({ message: 'Token not found', statusCode: 401 })

  // Verify the token
  const payload = verify(token, process.env.JWT_SECRET as string) as {
    id: string
  }
  const user = await User.findById(payload.id)

  // If the user does not exist, return an error
  if (user === null) return next({ message: 'User not found', statusCode: 404 })

  req.headers.userId = payload.id
  next()
})

// Auth guard for admin
export const authorize = asyncWrapper(async (req, _, next) => {
  const user = await User.findById(req.headers.userId)

  // If the user is an admin, proceed
  if (user && user.role === 'admin') return next()

  // If the user is not an admin, return an error
  return next({
    message: 'You are not authorized to perform this action',
    statusCode: 401
  })
})

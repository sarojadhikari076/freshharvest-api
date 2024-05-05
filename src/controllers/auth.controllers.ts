import User from '../models/user.model'
import asyncWrapper from '../utils/asyncWrapper'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

// Register a new user
export const register = asyncWrapper(async (req, res, next) => {
  // Check if the email or phone is already in use
  const existing = await User.findOne({
    $or: [{ email: req.body.email }, { phone: req.body.phone }]
  })

  // If the user already exists, throw an error
  if (existing)
    return next({ message: 'Email or Phone already in use', statusCode: 400 })

  // Hash the password
  const hashedPassword = await hash(req.body.password, 10)
  req.body.password = hashedPassword

  // Set the role and designation
  req.body.role = 'customer'
  req.body.designation = 'Customer'

  // Create the user
  const user = await User.create(req.body)
  res.status(201).json({ user })
})

// Login a user
export const login = asyncWrapper(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  // If the user does not exist, throw an error
  if (user === null)
    return next({
      message: 'User with this email does not exist',
      statusCode: 401
    })

  const isMatch = await compare(req.body.password, user.password)

  // If the password is incorrect, throw an error
  if (isMatch === false)
    return next({ message: 'Invalid credentials provided', statusCode: 401 })

  // Generate a token
  const token = sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d'
  })

  res.status(200).json({ token, user })
})

// Get the current user
export const getCurrentUser = asyncWrapper(async (req, res, next) => {
  const user = await User.findById(req.headers.userId)

  // If the user does not exist, return an error
  if (user === null) return next({ message: 'User not found', statusCode: 404 })

  res.status(200).json({ user })
})

// Update the current user
export const updateCurrentUser = asyncWrapper(async (req, res, next) => {
  // If password is present, return an error
  if (req.body.password)
    return next({ message: 'Password cannot be updated here', statusCode: 400 })

  const user = await User.findByIdAndUpdate(req.headers.userId, req.body, {
    new: true
  })

  // If the user does not exist, return an error
  if (user === null) return next({ message: 'User not found', statusCode: 404 })

  res.status(200).json({ user })
})

// Update the current user's password
export const updateCurrentUserPassword = asyncWrapper(
  async (req, res, next) => {
    const user = await User.findById(req.headers.userId)

    // If the user does not exist, return an error
    if (user === null)
      return next({ message: 'User not found', statusCode: 404 })

    const isMatch = await compare(req.body.currentPassword, user.password)

    // If the current password is incorrect, return an error
    if (isMatch === false)
      return next({ message: 'Current password is incorrect', statusCode: 400 })

    // Hash the new password
    const hashedPassword = await hash(req.body.newPassword, 10)
    user.password = hashedPassword
    await user.save()

    res.status(200).json({ user })
  }
)

// Delete the current user
export const deleteCurrentUser = asyncWrapper(async (req, res) => {
  await User.findByIdAndDelete(req.headers.userId)
  res.status(204).end()
})

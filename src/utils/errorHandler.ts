import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

/**
 * Express error handling middleware function.
 * @param err Error object
 * @param req Express request object
 * @param res Express response object
 * @param next Next function
 */
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  // Log the error for debugging purposes
  console.error(err)

  // Default error message and status code
  let errorMessage = 'Internal Server Error'
  let statusCode = 500

  // Handle Mongoose validation errors
  if (err instanceof mongoose.Error.ValidationError) {
    errorMessage = 'Validation Error'
    statusCode = 400
  }

  // Handle Mongoose duplicate key error
  if (err instanceof Error && err.message.includes('duplicate key error')) {
    errorMessage = 'Duplicate Key Error'
    statusCode = 400
  }

  // Handle unauthorized access errors
  if (err.name === 'UnauthorizedError') {
    errorMessage = 'Unauthorized Access'
    statusCode = 401
  }

  // Handle JWT token expired errors
  if (err.name === 'TokenExpiredError') {
    errorMessage = 'Token Expired'
    statusCode = 401
  }

  // Handle other JWT errors
  if (err.name === 'JsonWebTokenError') {
    errorMessage = 'Invalid Token'
    statusCode = 401
  }

  // Handle not found errors
  if (err.name === 'NotFoundError') {
    errorMessage = 'Not Found'
    statusCode = 404
  }

  // Send the error response
  res.status(statusCode).json({ error: errorMessage })
}

export default errorHandler

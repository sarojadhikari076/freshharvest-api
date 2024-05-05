import e, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

type CustomError = Error & { statusCode: number }

// Utility function to handle errors
const errorHandler = (
  err: CustomError,
  _: Request,
  res: Response,
  __: NextFunction
): void => {
  // Log the error for debugging purposes
  console.log('Error: ', err)

  // Default error message and status code
  let errorMessage = err.message || 'Internal Server Error'
  let statusCode = err.statusCode || 500

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

  // Send the error response
  res.status(statusCode).json({ message: errorMessage })
}

export default errorHandler

import { RequestHandler } from 'express'

/**
 * Utility function to wrap async route handlers and middleware functions
 * to handle asynchronous errors in a centralized manner.
 * @param fn Async route handler or middleware function
 * @returns RequestHandler
 */
const asyncWrapper = (fn: RequestHandler): RequestHandler => {
  return (req, res, next): void => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export default asyncWrapper

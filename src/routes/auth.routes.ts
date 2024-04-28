import { Router } from 'express'
import {
  login,
  register,
  authenticate,
  deleteCurrentUser,
  getCurrentUser,
  updateCurrentUser,
  updateCurrentUserPassword
} from '../controllers/auth.controllers'

const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)

authRouter.use(authenticate)
authRouter.get('/me', getCurrentUser)
authRouter.patch('/me', updateCurrentUser)
authRouter.patch('/me/password', updateCurrentUserPassword)
authRouter.delete('/me', deleteCurrentUser)

export default authRouter

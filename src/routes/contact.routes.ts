import { Router } from 'express'
import {
  createContact,
  getContacts,
  deleteContact,
  getContactById,
  updateContact
} from '../controllers/contact.controllers'
import { authenticate, authorize } from '../middlewares/auth.middlewares'

const contactRouter = Router()

contactRouter.post('/', createContact)

// Only admin can view, update, and delete contacts
contactRouter.use(authenticate, authorize)
contactRouter.get('/', getContacts)
contactRouter
  .route('/:id')
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact)

export default contactRouter

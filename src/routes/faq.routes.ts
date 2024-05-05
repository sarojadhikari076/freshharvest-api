import { Router } from 'express'
import {
  createFaq,
  deleteFaq,
  getFaqById,
  getFaqs,
  updateFaq
} from '../controllers/faq.controllers'
import { authenticate, authorize } from '../middlewares/auth.middlewares'

const faqRouter = Router()

faqRouter.get('/', getFaqs)
faqRouter.get('/:id', getFaqById)

// Only admin can create, update, and delete FAQs
faqRouter.use(authenticate, authorize)
faqRouter.post('/', createFaq)
faqRouter.put('/:id', updateFaq)
faqRouter.delete('/:id', deleteFaq)

export default faqRouter

import { Router } from 'express'
import {
  createFaq,
  deleteFaq,
  getFaqById,
  getFaqs,
  updateFaq
} from '../controllers/faq.controllers'

const faqRouter = Router()

faqRouter.get('/', getFaqs)
faqRouter.get('/:id', getFaqById)
faqRouter.post('/', createFaq)
faqRouter.put('/:id', updateFaq)
faqRouter.delete('/:id', deleteFaq)

export default faqRouter

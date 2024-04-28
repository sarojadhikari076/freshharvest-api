import Faq from '../models/faq.model'
import asyncWrapper from '../utils/asyncWrapper'

// Get all FAQs
export const getFaqs = asyncWrapper(async (req, res) => {
  const faqs = await Faq.find()
  res.status(200).json({ faqs })
})

// Get a FAQ by ID
export const getFaqById = asyncWrapper(async (req, res) => {
  const faq = await Faq.findById(req.params.id)
  if (faq === null) throw new Error('NotFoundError')
  res.status(200).json({ faq })
})

// Create a new FAQ
export const createFaq = asyncWrapper(async (req, res) => {
  const faq = await Faq.create(req.body)
  res.status(201).json({ faq })
})

// Update a FAQ
export const updateFaq = asyncWrapper(async (req, res) => {
  const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json({ faq })
})

// Delete a FAQ
export const deleteFaq = asyncWrapper(async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

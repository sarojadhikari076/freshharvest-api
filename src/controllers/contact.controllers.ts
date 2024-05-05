import Contact from '../models/contact.model'
import asyncWrapper from '../utils/asyncWrapper'

// Get all contacts
export const getContacts = asyncWrapper(async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json({ contacts })
})

// Get a contact by ID
export const getContactById = asyncWrapper(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id)
  if (contact === null)
    return next({ message: 'Contact not found', statusCode: 404 })
  res.status(200).json({ contact })
})

// Create a new contact
export const createContact = asyncWrapper(async (req, res) => {
  const contact = await Contact.create(req.body)
  res.status(201).json({ contact })
})

// Update a contact
export const updateContact = asyncWrapper(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json({ contact })
})

// Delete a contact
export const deleteContact = asyncWrapper(async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import { v4 as uuid } from 'uuid'
import Product from '../models/product.model'
import User from '../models/user.model'
import Faq from '../models/faq.model'
import slugify from 'slugify'

import { faqs } from '../data/faqs'
import { products } from '../data/products'
import { teamMembers } from '../data/teamMembers'

config()

const MONGODB_URI = process.env.MONGODB_URI || ''

const teamMembersWithHashedPasswords = teamMembers.map((member) => {
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(member.password, salt)
  return { ...member, password: hashedPassword }
})

const sluggifiedProducts = products.map((product) => {
  // Generate a unique 4-digit UUID for each product
  const uniqueId = uuid().slice(4, 8)

  // Generate a unique slug for each product
  const slug =
    slugify(product.name, {
      lower: true,
      strict: true,
      trim: true
    }) +
    '-' +
    uniqueId

  return { ...product, slug }
})

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI)

    await Faq.deleteMany({})
    await Faq.insertMany(faqs)

    await Product.deleteMany({})
    await Product.insertMany(sluggifiedProducts)

    await User.deleteMany({})
    await User.insertMany(teamMembersWithHashedPasswords)

    console.log('Data seeding successful')
    mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error('Data seeding failed:', error)
    process.exit(1)
  }
}

seedData()

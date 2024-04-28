import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
import errorHandler from './utils/errorHandler'
import router from './routes'

config()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || ''

connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error.message)
  })

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const stripeKey = process.env.STRIPT_SECRET_KEY || ''

const stripe = new Stripe(stripeKey, {
  typescript: true,
  apiVersion: '2024-04-10'
})

export async function getClientSecret(amount: number) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'gbp',
    payment_method_types: ['card'],
    capture_method: 'manual'
  })

  return paymentIntent.client_secret
}

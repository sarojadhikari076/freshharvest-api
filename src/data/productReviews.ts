export type UserReview = {
  name: string
  avatar: string
  message: string
  rating: number
  createdAt: string
}

export const userReviews: UserReview[] = [
  {
    name: 'Ben Johnson',
    avatar: '/images/avatar-1.jpeg',
    message:
      'This is a great product. I have been using it for a while now and I am very happy with the results. I would recommend it to anyone who is looking for a healthy and delicious.',
    rating: 5,
    createdAt: '01 Mar 2023'
  },
  {
    name: 'Sam Peters',
    avatar: '/images/avatar-2.avif',
    message:
      'I love couli flower. It is a great source of antioxidants, which protect your cells from harmful free radicals and inflammation. You can enjoy it raw, steamed, or roasted.',
    rating: 4,
    createdAt: '21 Jan 2024'
  },
  {
    name: 'John Doe',
    avatar: '/images/avatar-3.jpeg',
    message:
      'While buying fruits and vegetables, I always prefer this store. They provide the best quality products at the best price.',
    rating: 5,
    createdAt: '12 Feb 2024'
  }
]

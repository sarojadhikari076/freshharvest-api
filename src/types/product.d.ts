export type Category = 'fruits' | 'vegetables'

export type Product = {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  category: Category
  subCategory: string
  price: number
  unit: string
  thumbnail: string
  availableQuantity: number
  averageRating: number
  reviewCount: number
}

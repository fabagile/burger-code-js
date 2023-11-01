export type Dish = {
  id: string
  meal: string
  description: string
  price: number
  image: string
  category?: string
}
export interface Product extends Dish {
  number: number
}
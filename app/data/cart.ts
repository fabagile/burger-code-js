import { type Product } from '~/models/data'

export const cart: Product[]|null = []

export const getCart = async () => await cart

export const addProduct = async (product: Product) => {
  await cart.push(product)
  return cart
}

export const  removeProduct = async(product:Product) => {
  await cart.filter(item=> item.id!=product.id)
  return cart
}

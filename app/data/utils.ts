import { menu } from "./items"

export const getMenu = async () => await menu
export const getDish = async (val: string) =>
  await menu.find(item => item.id == val)

export const addDish = async (dish: any) => await menu.push(dish)
export const deleteDish = async (val: string) =>
  await menu.filter(dish => dish.id != val)
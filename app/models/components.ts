import { type ReactNode } from 'react'
import type { Dish } from './data'

export type ButtonType = {
  children?: ReactNode
  color?: string
  size?: string
  to?: string
  title?: string
  btnType?: any
}
export interface IconButtonType extends ButtonType {
  name: string
}

export type ThumbnailType = { item: Dish; children?: ReactNode }

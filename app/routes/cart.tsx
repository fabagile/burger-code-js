// import React from 'react'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {
  getCart
  // addProduct,
} from '~/data/cart'
import BackButton from '../components/actions/BackButton'
// import UserLayout from '~/templates/_UserLayout'
import CartLayout from '~/templates/_CartLayout'
// import { Product } from '../models/data';
export const loader = async () => {
  const cart = await getCart()
  return json({ cart })
}
// export const action = async () => {
//   const cart = await addProduct(item:Product)
//   return json({cart})
// }

const Cart = () => {
  const { cart } = useLoaderData<typeof loader>()
  return (
    <CartLayout>
      <div className='row'>
        {cart.length ? <div>{cart.length}</div> : 'en attente de commande'}
      </div>
      <div className='row'>
        <BackButton to='/' />
      </div>
    </CartLayout>
  )
}

export default Cart

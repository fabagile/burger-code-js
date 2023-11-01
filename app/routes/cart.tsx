import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { getCart } from '~/data/cart'
import BackButton from '../components/actions/BackButton';
export const loader = async () => {
  const cart = await getCart()
  return json({ cart })
}
const Cart = () => {
  const { cart } = useLoaderData<typeof loader>()
  return (
    <div className='admin'>
      <div className='row'>
        {cart.length? 
        <div>{cart.length}</div> : 'en attente de commande'
        }
      </div>
      <div className="row">
        <BackButton />
      </div>
    </div>
  )
}

export default Cart

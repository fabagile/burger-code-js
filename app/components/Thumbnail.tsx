import React from 'react'

import { Link } from '@remix-run/react'

import Icon from './Icon'
import type { Dish } from '~/data'

const Thumbnail = ({ item }: { item: Dish }) => (
  <div className='thumbnail'>
    <img src={`${item.image}`} alt='...' />
    <div className='price'>{item.price.toFixed(2)} €</div>
    <div className='caption'>
      <h4>{item.meal}</h4>
      <p>{item.description}</p>
      <Link to='#' className='btn btn-order' role='button'>
        <Icon name='shopping-cart' /> Commander
      </Link>
    </div>
  </div>
)

export default Thumbnail

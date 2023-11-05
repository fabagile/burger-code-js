import { NavLink } from '@remix-run/react'
import React from 'react'
import { categories } from '~/data/items'
import Icon from '~/components/Icon'

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className='nav nav-pills'>
          {categories.map((cat, i) => (
            <li key={cat} role='presentation'>
              <NavLink
                // className={i == 0 ? 'rounded btn-success' : ''}
                to={`/produits/${cat}`}
                data-toggle='tab'
              >
                {cat}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to='/cart'>
              <Icon name='shopping-cart' />
            </NavLink>
          </li>
        </ul>
      </nav>
      <br />
    </>
  )
}

export default Navigation

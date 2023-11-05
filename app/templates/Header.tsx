import React from 'react'
import Icon from '~/components/Icon'

const Header = () => {
  return (
    <header>
      <h1 className='text-logo'>
        <Icon name='cutlery' /> Burger Code <Icon name='cutlery' />
      </h1>
    </header>
  )
}

export default Header

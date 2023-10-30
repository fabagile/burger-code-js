import React from 'react'

import { Link } from '@remix-run/react'

import Icon from '../Icon'

const BackButton = ({label='Retour'}:{label?:string}) => {
  return (
    <Link className='btn btn-primary' to='/admin'>
      <Icon name='arrow-left' /> {label}
    </Link>
  )
}

export default BackButton

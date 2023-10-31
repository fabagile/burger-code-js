import React from 'react'
import Button from './Button'
import Icon from '../Icon'
import { type IconButtonType } from '../../models/components'

const IconButton = ({
  children,
  color = 'default',
  size = 'md',
  title = '',
  btnType = 'button',
  to,
  name
}: IconButtonType) => {
  return (
    <Button color={color} size={size} title={title} btnType={btnType} to={to}>
      <Icon name={name} />
      {children}
    </Button>
  )
}

export default IconButton

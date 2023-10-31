import React from 'react'
import { Link } from '@remix-run/react'
import type { ButtonType } from '../../models/components'

const Button = ({
  children,
  color = 'default',
  size = 'md',
  title = '',
  btnType = 'button',
  to
}: ButtonType) => {
  const styles = `btn btn-${color} btn-${size}`
  return (
    <>
      {to ? (
        <Link to={to} className={styles} title={title}>
          {children}
        </Link>
      ) : (
        <button className={styles} title={title} type={btnType}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button

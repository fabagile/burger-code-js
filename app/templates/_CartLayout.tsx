import React, { type ReactNode } from 'react'
import Main from './Main'
import Navigation from './Navigation'

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />

      <div className='admin'>
        <Main>{children}</Main>
      </div>
    </>
  )
}

export default CartLayout

import React, { type ReactNode } from 'react'

import Navigation from './Navigation'
import Main from './Main'

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
    </>
  )
}

export default UserLayout

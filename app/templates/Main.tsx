// import { Outlet } from '@remix-run/react'
import React, { type ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className='tab-content'>
      <div className='row'>{children}</div>
    </main>
  )
}

export default Main

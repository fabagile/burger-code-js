import React, { type ReactNode } from 'react'
import Main from './Main'

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='admin'>
        <div className='row'>
          <Main>{children}</Main>
        </div>
      </div>
    </>
  )
}

export default AdminLayout

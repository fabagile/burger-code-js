import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Burger Code' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function AdminRoute () {
  return (
    <div className='container admin'>
      <div className='row'>
        <Outlet />
      </div>
    </div>
  )
}

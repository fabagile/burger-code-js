import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import AdminLayout from '~/templates/_AdminLayout'

export const meta: MetaFunction = () => {
  return [
    { title: 'Burger Code' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function AdminRoute () {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}

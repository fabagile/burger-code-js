import { Outlet } from '@remix-run/react'
import UserLayout from '~/templates/_UserLayout'

const ProductsRoute = () => {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  )
}

export default ProductsRoute

// import {useEffect} from 'react'
import { type MetaFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Card } from '~/components/Card'
import { getMenu } from '~/data/utils'
import UserLayout from '~/templates/_UserLayout'

export const meta: MetaFunction = () => {
  return [
    { title: 'Burger Code' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}
export const loader = async () => {
  const menu = await getMenu()
  return json({ menu })
}

const Index = () => {
  const { menu } = useLoaderData<typeof loader>()
  // if  (menu.length>0) {

  //   throw redirect("/produits/menus")
  // }

  return (
    <UserLayout>
      {menu.map(
        item => item.category === 'menus' && <Card key={item.id} item={item} />
      )}
      {/* <Link to='produits/menus' >consulter le menu</Link> */}
      {/* </div>
</div> */}
    </UserLayout>
  )
}

export default Index

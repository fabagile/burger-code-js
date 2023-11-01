// import {useEffect} from 'react'
import { type MetaFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Card } from '~/components/Card'
import { getMenu } from '~/data/utils'

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
    <div className='tab-content'>
      <div className='row'>
        {/* <Link to='produits/menus' >consulter le menu</Link> */}
        {menu.map(
          item =>
            item.category === 'menus' && <Card key={item.id} item={item} />
        )}
      </div>
    </div>
  )
}

export default Index

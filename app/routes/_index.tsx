import type { MetaFunction } from '@remix-run/node'
import { Card } from '~/components/Card'
import { menu } from '~/data/items'

export const meta: MetaFunction = () => {
  return [
    { title: 'Burger Code' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

const Index = () => (
  <div className='tab-content'>
    <div className='row'>
      {menu.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  </div>
)

export default Index

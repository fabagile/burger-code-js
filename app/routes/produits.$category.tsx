import { useParams } from '@remix-run/react'
import React from 'react'
import { Card } from '~/components/Card'
import { menu } from '~/data'
// export const loader = () => {
//   const {category} =
// }
const Category = () => {
  const { category } = useParams()
  const items = menu.filter(item => item.category == category)
  return (
    <div className='tab-content'>
      <div className='row'>
        {items.map(item => (
          <>
            <Card key={item.id} item={item} />
          </>
        ))}
      </div>
    </div>
  )
}

export default Category

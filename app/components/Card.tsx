// import React from 'react'

import Thumbnail from './Thumbnail'

export const Card = ({ item }: { item: any }) => {
  return (
    <div
      className={`tab-pane ${item.id == 1 ? 'active' : ''}`}
      id={item.id.toString()}
    >
      <div className='col-sm-6 col-md-4'>
        <Thumbnail item={item} />
      </div>
    </div>
  )
}

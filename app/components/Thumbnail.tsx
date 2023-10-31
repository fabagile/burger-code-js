import type { ThumbnailType } from '~/models/components'

const Thumbnail = ({ item, children }: ThumbnailType) => (
  <div className='thumbnail'>
    <img src={`${item.image}`} alt='...' />
    <div className='price'>{item.price.toFixed(2)} €</div>
    <div className='caption'>
      <h4>{item.meal}</h4>
      <p>{item.description}</p>
      {children}
    </div>
  </div>
)

export default Thumbnail

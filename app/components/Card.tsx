import Thumbnail from './Thumbnail'
import IconButton from './actions/IconButton'

export const Card = ({ item }: { item: any }) => {
  return (
    <div
      className={`tab-pane ${item.id == 1 ? 'active' : ''}`}
      id={item.id.toString()}
    >
      <div className='col-sm-6 col-md-4'>
        <Thumbnail item={item}>
          <IconButton to='/' color='order' name='shopping-cart'>
            {' '}
            Commander
          </IconButton>
        </Thumbnail>
      </div>
    </div>
  )
}

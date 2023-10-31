import { Form, useLoaderData } from '@remix-run/react'
import { json, type LoaderFunctionArgs } from '@remix-run/node'

import invariant from 'tiny-invariant'

import { getDish } from '~/data/utils'

import Thumbnail from '~/components/Thumbnail'
import BackButton from '~/components/actions/BackButton'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.itemId, 'produit non trouvé')
  const item = await getDish(params.itemId)
  if (!item) {
    throw new Response('Produit non trouvé', { status: 404 })
  }
  return json({ item })
}

const ViewItem = () => {
  const { item } = useLoaderData<typeof loader>()

  // console.log(item)

  return (
    <>
      <div className='col-sm-6'>
        <h1>
          <strong>Détail {item.meal}</strong>
        </h1>
        <br />
        <Form>
          <div className='form-group'>
            <label>Nom: </label>
            {item.meal}

            {/* <?php echo '  '.$item['name'];?> */}
          </div>
          <div className='form-group'>
            <label>Description: </label>
            {item.description}
            {/* <?php echo '  '.$item['description'];?> */}
          </div>
          <div className='form-group'>
            <label>Prix: </label>
            {item.price.toFixed(2)} €
            {/* <?php echo '  '.number_format((float)$item['price'], 2, '.', ''). ' €';?> */}
          </div>
          <div className='form-group'>
            <label>Catégorie: </label>
            {item.category}
            {/* <?php echo '  '.$item['category'];?> */}
          </div>
          <div className='form-group'>
            <label>Image: </label>
            {item.image}
            {/* <?php echo '  '.$item['image'];?> */}
          </div>
        </Form>
        <br />
        <div className='form-actions'>
          <BackButton />
        </div>
      </div>
      <div className='col-sm-6 site'>
        <Thumbnail item={item} />
      </div>
    </>
  )
}

export default ViewItem

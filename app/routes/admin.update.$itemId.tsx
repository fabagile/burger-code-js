import { Form, useLoaderData } from '@remix-run/react'

import { json, type LoaderFunctionArgs } from '@remix-run/node'

import invariant from 'tiny-invariant'
import { categories } from '~/data/items'
import { getDish } from '~/data/utils'

import Input from '~/components/form/Input'
import Thumbnail from '~/components/Thumbnail'
import BackButton from '~/components/actions/BackButton'
import IconButton from '~/components/actions/IconButton'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.itemId, 'produit non trouvé')
  const item = await getDish(params.itemId)
  if (!item) {
    throw new Response('non trouvé', { status: 404 })
  }
  return json({ item })
}

const UpdateItem = () => {
  const { item } = useLoaderData<typeof loader>()
  console.log(item)
  return (
    <>
      <div className='col-sm-6'>
        <h2>
          <strong>Modifier {item.meal}</strong>
        </h2>
        <br />
        <Form
          className='form'
          /* action="<?php echo 'update.php?id='.$id;?>" */ role='form'
          method='post' /* enctype="multipart/form-data" */
        >
          <Input
            label='Nom'
            value='name'
            // entry=''
            // setEntry={() => console.log('entry')}
          />
          <Input
            label='Description'
            value='description'
            // entry=''
            // setEntry={() => console.log('entry')}
          />
          <Input
            label='Prix'
            value='price'
            // entry=''
            // setEntry={() => console.log('entry')}
            inputType='number'
          />

          <div className='form-group'>
            <label htmlFor='category'>Catégorie:</label>
            <select className='form-control' id='category' name='category'>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <span className='help-inline'>
              {/* <?php echo $categoryError;?> */}
            </span>
          </div>

          <div className='form-group'>
            {/* <label htmlFor='image'>Image:</label> */}
            <Input value='image' inputType='file' label='image' />
            {/* <label htmlFor='image'>Sélectionner une nouvelle image:</label> */}
            {/* <input type='file' id='image' name='image' /> */}
            <p>{item.image}</p>
            {/* <span className="help-inline">{<?php echo $imageError;?>}</span> */}
          </div>
          <br />
          <div className='form-actions'>
            <IconButton btnType='submit' color='success' name='pencil'>
              Modifier
            </IconButton>
            <BackButton />
          </div>
        </Form>
      </div>
      <div className='col-sm-6 site'>
        <Thumbnail item={item} />
      </div>
    </>
  )
}

export default UpdateItem

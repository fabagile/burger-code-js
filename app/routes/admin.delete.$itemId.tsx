import { type LoaderFunctionArgs, json, /* redirect */ } from '@remix-run/node'
import { Form, /* Link,  */ useLoaderData, useSubmit } from '@remix-run/react'
import React from 'react'
import invariant from 'tiny-invariant'
import Button from '~/components/actions/Button'
import SubmitButton from '~/components/actions/SubmitButton'
import { getDish } from '~/data/utils'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.itemId, 'produit non trouvé')
  const item = await getDish(params.itemId)
  if (!item) {
    throw new Response('Produit non trouvé', { status: 404 })
  }
  return json({ item })
}
// const deleteItem=()=> {
//   console.log("c'est bien")
// // redirect('/admin')
// }

const DeleteItem = () => {
  const { item } = useLoaderData<typeof loader>()
  const submit = useSubmit()
  return (
    <>
      <h1>
        <strong>Supprimer {item.meal}</strong>
      </h1>
      <br />
      <Form
        className='form'
        onSubmit={(e)=>submit(e.currentTarget)}
        /* action='delete.php' */
        // onSubmit={deleteItem}
        role='form'
        method='post'
      >
        <input type='hidden' name={item.meal} value={item.id} />
        <p className='alert alert-warning'>
          Etes-vous sur de vouloir supprimer ?
        </p>
        <div className='form-actions'>
          <SubmitButton label='Oui' color='warning' />
          
          <Button color='default' to='/admin'>
            Non
          </Button>
        </div>
      </Form>
    </>
  )
}

export default DeleteItem

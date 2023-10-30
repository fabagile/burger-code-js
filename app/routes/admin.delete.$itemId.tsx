import { Form } from '@remix-run/react'
import React from 'react'
import SubmitButton from '~/components/actions/SubmitButton'

const DeleteItem = () => {
  return (
    <>
      <h1>
        <strong>Supprimer un produit</strong>
      </h1>
      <br />
      <Form
        className='form'
        /* action='delete.php' */
        role='form'
        method='post'
      >
        <input type='hidden' name='id' value='<?php echo $id;?>' />
        <p className='alert alert-warning'>
          Etes-vous sur de vouloir supprimer ?
        </p>
        <div className='form-actions'>
          <SubmitButton label='Oui' color='warning' />
          {/* <button type='submit' className='btn btn-warning'>
            Oui
          </button> */}
          <a className='btn btn-default' href='index.php'>
            Non
          </a>
        </div>
      </Form>
    </>
  )
}

export default DeleteItem

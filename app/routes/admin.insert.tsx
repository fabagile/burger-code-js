import React from 'react'
import { Form /* Link */ } from '@remix-run/react'
// import Icon from '~/components/Icon'
import Input from '~/components/form/Input'
import BackButton from '~/components/actions/BackButton'
import SubmitButton from '~/components/actions/SubmitButton'

const InsertItem = () => {
  return (
    <>
      {/* <div className='container'></div> */}
      <h2>
        <strong>Ajouter un produit</strong>
      </h2>
      <br />
      <Form
        className='form'
        // action=''
        role='form'
        method='post' /* enctype="multipart/form-data" */
      >
        <Input
          label='Nom'
          value='name'
          entry=''
          setEntry={() => console.log('entry')}
        />
        <Input
          label='Description'
          value='description'
          entry=''
          setEntry={() => console.log('entry')}
        />
        <Input
          label='Prix'
          value='price'
          entry=''
          setEntry={() => console.log('entry')}
          inputType='number'
        />
        <Input
          label='Image'
          value='image'
          entry=''
          setEntry={() => console.log('entry')}
          inputType='file'
        />

        <br />
        <div className='form-actions'>
          <SubmitButton />
          <BackButton />
        </div>
      </Form>
    </>
  )
}

export default InsertItem

// import React, { useState } from 'react'
import { Form /* Link */ } from '@remix-run/react'
// import Icon from '~/components/Icon'
import Input from '~/components/form/Input'
import BackButton from '~/components/actions/BackButton'
import SubmitButton from '~/components/actions/SubmitButton'

const InsertItem = () => {
  // const [meal, setMeal] = useState('')
  // const [description, setDescription] = useState('')
  // const [category, setCategory] = useState('')
  // const [price, setPrice] = useState(0)
  // const [image, setImage] = useState('')

  // const setEntry = (e:EventListener) => {
  //   const entry = e.target.
  // }

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
          // entry={meal}
          // setEntry={() => setMeal()}
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
        <Input
          label='Image'
          value='image'
          // entry=''
          // setEntry={() => console.log('entry')}
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

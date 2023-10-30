import React from 'react'

import Icon from '../Icon'

const SubmitButton = ({label='Ajouter',color}:{label?:string,color?:string}) => {
  return (
    <button type='submit' className={`btn btn-${label=='Ajouter'?'success':color}`}>
      <Icon name='pencil' /> {label}
    </button>
  )
}

export default SubmitButton

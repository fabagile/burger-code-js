import IconButton from './IconButton'

const SubmitButton = ({
  label = 'Ajouter',
  color
}: {
  label?: string
  color?: string
}) => {
  return (
    <IconButton
      btnType='submit'
      name='pencil'
      color={label == 'Ajouter' ? 'success' : color}
    >
      {label}
    </IconButton>
  )
}

export default SubmitButton

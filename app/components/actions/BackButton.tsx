import IconButton from './IconButton'

const BackButton = ({ label = 'Retour' }: { label?: string }) => {
  return (
    <IconButton color='primary' to='/admin' name='arrow-left'>
      {label}
    </IconButton>
  )
}

export default BackButton

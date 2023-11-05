import IconButton from './IconButton'

const BackButton = ({ label = 'Retour' , to='/admin'}: { label?: string,to?:string }) => {
  return (
    <IconButton color='primary' to={to} name='arrow-left'>
      {label}
    </IconButton>
  )
}

export default BackButton

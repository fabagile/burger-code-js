import type { MetaFunction } from '@remix-run/node'
import IconButton from '~/components/actions/IconButton'
import { menu } from '~/data/items'

export const meta: MetaFunction = () => {
  return [
    { title: 'Burger Code' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function AdminIndex () {
  return (
    <>
      <h2>
        <strong>Liste des produits </strong>
        <IconButton to='/admin/insert' color='success' size='lg' name='plus'>
          Ajouter
        </IconButton>
        {/* <Link to= className='btn btn-success btn-lg'>
        </Link> */}
      </h2>
      <table className='table table-striped table-responsive'>
        <thead>
          <tr>
            <th className='text-center'>Nom</th>
            <th className='text-center'>Description</th>
            <th className='text-center'>Prix</th>
            <th className='text-center'>Catégorie</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(item => (
            <>
              <tr key={item.id}>
                <td>{item.meal}</td>
                <td>{item.description}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <div className='btn-group btn-group-sm'>
                    <IconButton
                      color='primary'
                      title='Voir'
                      to={`/admin/view/${item.id}`}
                      name='eye-open'
                    />
                    <IconButton
                      color='warning'
                      title='Modifier'
                      to={`/admin/update/${item.id}`}
                      name='pencil'
                    />
                    <IconButton
                      color='danger'
                      title='Supprimer'
                      to={`/admin/delete/${item.id}`}
                      name='erase'
                    />
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}

import type { MetaFunction } from '@remix-run/node'
// import Icon from './Icon'
import { Link } from '@remix-run/react'
import Icon from '~/components/Icon'
import { menu } from '~/data'

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
        <Link to='/admin/insert' className='btn btn-success btn-lg'>
          <Icon name='plus' /> Ajouter
        </Link>
      </h2>
      <table className='table table-striped'>
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
                  <Link
                    className='btn btn-default'
                    title='Voir'
                    to={`/admin/view/${item.id}`}
                  >
                    <Icon name='eye-open' />
                  </Link>{' '}
                  <Link
                    className='btn btn-primary'
                    title='Modifier'
                    to={`/admin/update/${item.id}`}
                  >
                    <Icon name='pencil' />
                  </Link>{' '}
                  <Link
                    className='btn btn-danger'
                    title='Supprimer'
                    to={`/admin/delete/${item.id}`}
                  >
                    <Icon name='remove' />
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}

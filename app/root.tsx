import type { LinksFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import styles from '~/styles/main.css'

import { categories } from './data/items'

import Icon from './components/Icon'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'stylesheet',
    href: 'http://fonts.googleapis.com/css?family=Holtwood+One+SC'
  },
  {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
  }
]

export default function App () {
  return (
    <html lang='fr'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Link to='/'>
          <h1 className='text-logo'>
            <Icon name='cutlery' /> Burger Code <Icon name='cutlery' />
          </h1>
        </Link>
        <div className='container'>
          <nav>
            <ul className='nav nav-pills'>
              {categories.map(cat => (
                <li
                  key={cat}
                  role='presentation'
                  className={cat == '1' ? 'rounded btn-success' : ''}
                >
                  <NavLink to={`/produits/${cat}`} data-toggle='tab'>
                    {cat}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <br />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

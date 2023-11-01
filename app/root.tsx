import type { LinksFunction } from '@remix-run/node'
import {
  // Link,
  Links,
  LiveReload,
  Meta,
  // NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import styles from '~/styles/main.css'

// import { categories } from './data/items'

import Icon from './components/Icon'
import Navigation from './components/Navigation'

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
        
        <h1 className='text-logo'>
          <Icon name='cutlery' /> Burger Code <Icon name='cutlery' />
        </h1>
        
        <div className='container'>
          <Navigation />
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

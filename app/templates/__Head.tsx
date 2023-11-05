import {type LinksFunction } from '@remix-run/node'
import { Links, Meta } from '@remix-run/react'
import styles from '~/styles/main.css'
import React from 'react'
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
const Head = () => {
  return (
    <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
  )
}

export default Head
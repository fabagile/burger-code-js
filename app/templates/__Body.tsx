import React from 'react'
import { LiveReload, Outlet, Scripts } from '@remix-run/react'
import { ScrollRestoration } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (<body>
    <Header />
    <div className='container'>
      <Outlet />
    </div>
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
  </body>
  )
}

export default Body
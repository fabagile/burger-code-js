import type { LinksFunction } from '@remix-run/node'

import Body from './templates/__Body'
import Head, {links as mainLinks} from './templates/__Head'

export const links: LinksFunction = () => [
  ...mainLinks()
]

export default function App () {
  return (
    <html lang='fr'>
      <Head />
      <Body />
    </html>
  )
}

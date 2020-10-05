import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import Stroke from './stroke'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Header title={title} />
    )
  } else {
    header = (
      <Link className='header-link-home' to='/'>
        {title}
      </Link>
    )
  }

  return (
    <div className='global-wrapper' data-is-root-path={isRootPath}>
      <header className='global-header'>{header}</header>
      <main>{children}</main>
      <Stroke />
    </div>
  )
}

export default Layout

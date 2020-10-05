import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import GlobalStyle from 'theme/global'
import { Link } from 'gatsby'
import Header from './header'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='global-wrapper' data-is-root-path={isRootPath}>
        <header className='global-header'>{header}</header>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout

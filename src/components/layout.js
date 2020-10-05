import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import GlobalStyle from 'theme/global'
import { Link } from 'gatsby'
import Header from './header'
import Stroke from './stroke'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const stroke = {
    color: theme.primaryColor,
    startVertically: true,
    reverse: false
  }

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
        <Stroke stroke={stroke} />
      </div>
    </ThemeProvider>
  )
}

export default Layout

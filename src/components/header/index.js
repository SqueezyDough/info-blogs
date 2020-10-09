import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Heading from 'elements/heading'
import Social from 'components/social'
import Intro from 'components/intro'

import { baseStyling } from './styles'

const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <div>
        <Heading as='h1'>
          <Link to='/'>{title}</Link>
        </Heading>
        <Intro />
      </div>
      <Social showAvatar />
    </header>
  )
}

export default styled(Header)`
  ${baseStyling}

  ${Social} {
    display: none;

    @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
      display: block;
    }
  }
`

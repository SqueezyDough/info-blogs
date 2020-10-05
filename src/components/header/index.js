import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Heading from 'elements/heading'
import Social from 'components/social'

import { baseStyling } from './styles'

const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <div className='content'>
        <Heading as='h1'>
          <Link to='/'>{title}</Link>
        </Heading>
        <Social />
      </div>
    </header>
  )
}

export default styled(Header)`
  ${baseStyling}
`

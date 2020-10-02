import React from 'react'
import Heading from 'elements/heading'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { baseStyling } from './styles'

const Header = ({ className, title }) => {
  return (
    <header className={className}>
      <div className='content'>
        <Heading as='h1'>
          <Link to='/'>{title}</Link>
        </Heading>
      </div>
    </header>
  )
}

export default styled(Header)`
  ${baseStyling}
`

import React from 'react'
import styled from 'styled-components'
import Social from 'components/social'
import Heading from 'elements/heading'
import Text from 'elements/text'
import Contact from './_contact-form'
import Copyright from './_copyright'

import { baseStyling } from './styles'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <Heading as='h3'>
        Wanna collaborate?
      </Heading>

      <Text className='text-collaborate' size='large'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <section className='footer__actions'>
        <Contact />
        <Social />
      </section>

      <Copyright />
    </footer>
  )
}

export default styled(Footer)`
  ${baseStyling}

  ${Social} a {
    margin-top: -2px;
  }
`

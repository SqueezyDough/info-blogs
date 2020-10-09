import React from 'react'
import styled from 'styled-components'
import Text from 'elements/text'

import { baseStyling } from './styles'

const Intro = ({ className }) => {
  return (
    <div className={className}>
      <Text size='extraLarge'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
    </div>
  )
}

export default styled(Intro)`
  ${baseStyling}
`

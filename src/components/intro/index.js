import React from 'react'
import styled from 'styled-components'
import Text from 'elements/text'

import { baseStyling } from './styles'

const Intro = ({ className }) => {
  return (
    <header className={className}>
      <Text>
        text
      </Text>
    </header>
  )
}

export default styled(Intro)`
  ${baseStyling}
`

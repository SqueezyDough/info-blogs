import React from 'react'
import styled from 'styled-components'

import { baseStyling } from './styles'

const Header = ({ className, title }) => (
  <span className={className}>{title}</span>
)

export default styled(Header)`
  ${baseStyling}
`

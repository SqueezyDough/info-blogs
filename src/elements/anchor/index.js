import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import {
  baseStyling,
  StyledPrimary,
  StyledSecondary,
  StyledTertiary,
  StyledQuaternary
} from './styles'

const Anchor = ({ className, type = 'primary', title }) => {
  return (
    <Link className={className} type={type} to='/'>{title}</Link>
  )
}

export default styled(Anchor)`
  ${baseStyling}

  ${props => {
    switch (props.type) {
      case 'primary':
        return StyledPrimary
      case 'secondary':
        return StyledSecondary
      case 'tertiary':
        return StyledTertiary
      case 'quaternary':
        return StyledQuaternary
      default:
        return StyledPrimary
    }
  }}
`

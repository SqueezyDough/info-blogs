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

const Anchor = ({ className, type = 'primary', path, title, external }) => {
  return (
    external ? (
      <a
        className={className}
        href={path}
        target='_blank'
        rel='noopener noreferrer'
      >
        {title}
      </a>
    ) : (
      <Link className={className} type={type} to={path}>{title}</Link>
    )
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

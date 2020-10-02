import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { baseStyling, fontFamily, fontSize } from './styles'

const Header = ({ className, as = 'h1', ...props }) => (
  <div className={className} as={as} {...props} />
)

export default styled(Header)`
  ${baseStyling}
  ${({ as }) => {
    return css`
      font-family: ${fontFamily(as)}
      font-size: ${fontSize(as)}
    `
  }}
`

Header.propTypes = {
  as: PropTypes.string.isRequired
}

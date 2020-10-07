import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import { baseStyling, fontFamily, fontSize } from './styles'

const Text = ({ weight = 'regular', size = 'regular', ...props }) => (
  <div as weight={weight} size={size} {...props} />
)

export default styled(Text)`
  ${baseStyling}
    
  ${({ weight, size }) => {
    return css`
      font-family: ${fontFamily(weight)};
      font-size: ${fontSize(size)};
    `
  }}
`

Text.propTypes = {
  as: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string
}

Text.defaultProps = {
  as: 'p',
  weight: 'regular',
  size: 'regular'
}

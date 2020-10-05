import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Stroke from 'components/stroke'
import { theme } from 'theme'
import { baseStyling } from './styles'

const stroke = {
  color: theme.primaryColor,
  yAxis: {
    start: true
  },
  reverse: false
}

const BlockHeading = ({ className, title }) => (
  <>
    <div className={className}>
      <Stroke stroke={stroke} />
      <h2>&mdash; {title}</h2>
    </div>
  </>
)

export default styled(BlockHeading)`
  ${baseStyling}

  ${Stroke} {
    position: absolute;
    top: -${({ theme }) => theme.baseStroke.halfWidth};
    z-index: 0;

    .stroke {
      height: calc(100% + 2.5rem);
      background-color: ${({ theme }) => theme.primaryColor};
      border-bottom-left-radius: 0;
    }
  }
`

BlockHeading.propTypes = {
  title: PropTypes.string.isRequired
}

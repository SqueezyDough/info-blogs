import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Stroke from 'components/stroke'
import Heading from 'elements/heading'
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
      <Heading as='h2'>
        &mdash; {title}
      </Heading>
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
      height: 80%;
      background-color: ${({ theme }) => theme.primaryColor};
      border-bottom-left-radius: 0;
    }
  }
`

BlockHeading.propTypes = {
  title: PropTypes.string.isRequired
}

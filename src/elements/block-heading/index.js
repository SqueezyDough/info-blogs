import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Heading from 'elements/heading'

import { baseStyling, StrokeTop, StrokeLeft } from './styles'

const BlockHeading = ({ className, title, strokePosition = 'left' }) => {
  return (
    <div className={className}>
      <Heading as='h2'>
        &mdash; {title}
      </Heading>
    </div>
  )
}

export default styled(BlockHeading)`
  ${baseStyling}

  ${props => {
    switch (props.strokePosition) {
      case 'top':
        return StrokeTop
      case 'left':
        return StrokeLeft
      default:
        return StrokeLeft
    }
  }}
`

BlockHeading.propTypes = {
  title: PropTypes.string.isRequired
}

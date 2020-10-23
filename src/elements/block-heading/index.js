import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Heading from 'elements/heading'

import { baseStyling, primaryTheme, secondaryTheme } from './styles'

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
    switch (props.title) {
      case 'Projects':
        return primaryTheme
      default:
        return secondaryTheme
    }
  }}
`

BlockHeading.propTypes = {
  title: PropTypes.string.isRequired
}

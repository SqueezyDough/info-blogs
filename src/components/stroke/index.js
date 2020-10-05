import React from 'react'
import styled from 'styled-components'

import { baseStyling } from './styles'

const Stroke = ({ className }) => {
  return (
    <div className={`${className} stroke-container`}>
      <span className='stroke__end' />
    </div>
  )
}

export default styled(Stroke)`
  ${baseStyling}
`

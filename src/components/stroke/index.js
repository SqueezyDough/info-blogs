import React from 'react'
import styled, { css } from 'styled-components'

import { baseStyling } from './styles'

const Stroke = ({ className }) => {
  return (
    <div className={`${className} stroke-container`}>
      <span className='stroke' />
    </div>
  )
}

export default styled(Stroke)`
  ${baseStyling}

  ${props =>
    props.stroke && css`
      .stroke {
        background-color:  ${({ stroke }) => stroke.color};

        /* vertical stroke */
        &::after {  
          background-color: ${({ stroke }) => stroke.color};
        }
    
        /* inner corner rounding */
        &::before {
          box-shadow: 0 -25px 0 0 ${({ stroke }) => stroke.color};
        }
      } 
    `};
  }
`

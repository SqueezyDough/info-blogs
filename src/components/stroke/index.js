import React from 'react'
import styled, { css } from 'styled-components'

import { baseStyling } from './styles'

const Stroke = ({ className }) => {
  return (
    <div className={`${className} stroke-container`}>
      <span className='stroke -vertical' />
      <span className='stroke -horizontal' />
    </div>
  )
}

export default styled(Stroke)`
  ${baseStyling}

  .stroke {
    ${props =>
      props.stroke && css`  
        background-color:  ${({ stroke }) => stroke.color};  
        
        &.-vertical {
          &::after {  
            box-shadow: 0 25px 0 0 ${({ stroke }) => stroke.color};
          }
        }
      `};
    }

    ${props =>
      props.stroke?.startVertically && css`
        
      `};
    }
  }
`

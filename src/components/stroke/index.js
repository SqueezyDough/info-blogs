import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { baseStyling } from './styles'

const Stroke = ({ className, stroke }) => {
  return (
    <div className={`${className} stroke-container`}>
      <>
        {stroke.yAxis ? (
          <span className='stroke -vertical' />
        ) : (
          null
        )}

        {stroke.xAxis ? (
          <span className='stroke -horizontal' />
        ) : (
          null
        )}
      </>
    </div>
  )
}

export default styled(Stroke)`
  ${baseStyling}

  position: absolute;
  z-index: -1;
  top: 0;
  height: 100%;
  width: 100%;

  .stroke {
    ${props =>
      props.stroke && css`  
        background-color:  ${({ stroke }) => stroke.color};  
        
        ${props =>
          props.stroke?.corner && css`
            &.-vertical::after {
              box-shadow: 0 25px 0 0 ${({ stroke }) => stroke.color};    
            }
          `};
        }
      `};
    }

    ${props =>
      props.stroke?.reverse && css`
        .stroke {
          transform: scaleX(-1);

          &.-vertical {
            right: 0;
            border-radius: ${({ theme }) => `0 ${theme.baseStroke.width} 0 ${theme.baseStroke.width}`}; 
          }

          &.-horizontal {
            width: 65%;
            right: 0;
          }
        }
      `};
    }
  }
`

Stroke.propTypes = {
  stroke: PropTypes.object.isRequired
}

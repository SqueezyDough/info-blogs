import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    align-items: center;
    padding-right: 4rem;
    white-space: nowrap;
    position: relative;
    width: 15rem;
    height: 20rem;
    background-color: ${({ theme }) => theme.primaryColor};
    border: ${({ theme }) => `${theme.baseStroke.halfWidth} solid ${theme.secondaryColor}`};
    border-top-width: ${({ theme }) => theme.baseStroke.halfWidth};
    border-right-width: .5rem;
    border-bottom-width: .5rem;
    border-left-width: 0;
    border-radius: ${({ theme }) => theme.baseStroke.width} ${({ theme }) => theme.baseStroke.halfWidth} ${({ theme }) => theme.baseStroke.halfWidth} ${({ theme }) => theme.baseStroke.halfWidth};

    /* inner corner rounding */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      width: 1rem;
      height: 3rem;
      box-shadow: 0 -25px 0 0 ${({ theme }) => theme.secondaryColor};   
      border-radius: ${({ theme }) => `0 ${theme.baseStroke.halfWidth} 0 ${theme.baseStroke.halfWidth}`};
    }
    
    h2 {
      position: relative;
      margin: 0;
      color: ${({ theme }) => theme.offWhite};
    }  
  `
}

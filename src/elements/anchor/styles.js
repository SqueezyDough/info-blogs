import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: inline-block;
    padding: ${({ theme }) => theme.spacingS};  
    margin: ${({ theme }) => theme.spacingS} 0;  
    border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`};  
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    font-family: ${({ theme }) => theme.fontDescriptionSemi};  
    text-decoration: none;
    white-space: nowrap;
    transition: ${({ theme }) => theme.transition};  
  `
}

export const StyledPrimary = () => {
  return css`
    background-color: #FFFFFF15;
    color: ${({ theme }) => theme.offWhite};  
    &:hover {
      background-color: ${({ theme }) => theme.tertiaryColor};  
      box-shadow: 0 5px 0 0 ${({ theme }) => theme.primaryColor};    
    }
  `
}

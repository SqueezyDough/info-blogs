import { css } from 'styled-components'
import { theme } from 'theme'

export const baseStyling = () => {
  return css`
    padding: ${theme.spacingS}; 
    border-radius: 0 ${theme.spacingS} ${theme.spacingS};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    font-family: ${theme.fontTitle}; 
    text-decoration: none;
    white-space: nowrap;
    transition: ${theme.transition};
  `
}

export const StyledPrimary = () => {
  return css`
    background-color: #FFFFFF40;
    color: ${theme.offWhite};
    &:hover {
      background-color: ${theme.tertiaryColor};
      box-shadow: 0 5px 0 0 ${({ theme }) => theme.primaryColor};    
    }
  `
}

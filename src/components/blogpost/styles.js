import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    min-width: 20rem;
    margin-left: ${({ theme }) => theme.spacingS}; 
    border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`}; 
    
    h2 {
      color: ${({ theme }) => theme.offWhite}; 
    }

    .post-list-item {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
    }

    .blogpost__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      padding: ${({ theme }) => theme.spacingS}; 
    }
  `
}

export const StyledLarge = () => {
  return css`
    background-image: ${({ theme }) => theme.primaryGradient};  
    color: ${({ theme }) => theme.primaryColorLight};  
  `
}

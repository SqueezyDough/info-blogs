import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative;
    margin-left: ${({ theme }) => theme.spacingS};
    z-index: 1;

    article {
      margin: 0;
      width: 20.5rem; 
      border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`}; 
    }
    
    h2 {
      padding-top: ${({ theme }) => theme.spacingM};
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

    .blogpost__footer {
      padding: 0;
    }
  `
}

export const StyledLarge = () => {
  return css`
    article {
      background-image: ${({ theme }) => theme.primaryGradient};  
      color: ${({ theme }) => theme.primaryColorDark}; 
    } 
  `
}

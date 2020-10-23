import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative;
    margin-left: ${({ theme }) => theme.spacing.sm};
    z-index: 1;

    article {
      margin: 0;
      width: 18rem; 
      box-shadow: -3em 0 1rem 0 #00000020;
      border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.md}`}; 
    
      @media(min-width: ${({ theme }) => theme.screens.md}) {
        width: 20rem; 
      }

      @media(min-width: ${({ theme }) => theme.screens.lg}) {
        width: 22rem; 
      }
    }
    
    h2 {
      padding-top: ${({ theme }) => theme.spacing.md};
      color: ${({ theme }) => theme.offWhite}; 
    }

    h6 {
      margin: ${({ theme }) => `${theme.spacing.sm} 0 ${theme.spacing.sm}`};  
      text-transform: uppercase;
    }
  
    .tags-list {
      display: flex;
      justify-content: space-between;
      width: 105%;
      list-style-type: none;
  
      li {
        flex-grow: 1;
  
        &:last-child {
          margin-left: ${({ theme }) => theme.spacing.xs};  
        }
  
        span {
          width: 100%;
        }
      }
    }

    .post-list-item {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .blogpost__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      padding: ${({ theme }) => `0 ${theme.spacing.xs}`};  
    }

    .blogpost__footer {
      padding: 0;
    }
  `
}

export const StyledLarge = () => {
  return css`
    article {
      height: 21rem;
      background-image: ${({ theme }) => theme.primaryGradient};  
      color: ${({ theme }) => theme.secondaryColorDark}; 
    } 

    aside {
      border-color: ${({ theme }) => theme.tertiaryColor};
    }

    h6 {
      color: ${({ theme }) => theme.secondaryColorDark}; 
    }

    .tags-list {
      span {
        background-color: ${({ theme }) => theme.secondaryColorDark};
      }
    }
  `
}

export const StyledSmall = () => {
  return css`
    article {
      height: 16rem; 
      background-image: ${({ theme }) => theme.gradients.secondary};  
      color: ${({ theme }) => theme.primaryColorDark}; 
    } 

    header {
      margin: 0;
    }

    h6 {
      margin: ${({ theme }) => `${theme.spacing.md} 0 ${theme.spacing.sm}`};  
      color: ${({ theme }) => theme.primaryColorDark}; 
    }

    h2 {
      margin: ${({ theme }) => `${theme.spacing.xs} 0`};  
    }
  `
}

export const StyledHighlight = () => {
  return css`
    max-width: 40rem;
    height: 22rem;
    background-color: ${({ theme }) => theme.colors.altOffWhite};
    border-radius: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg} ${theme.spacing.lg} 0`}; 

    @media(min-width: ${({ theme }) => theme.screens.lg}) {
      margin-left: -${({ theme }) => theme.spacing.md};  
    }

    article {
      box-shadow: none;
      padding: ${({ theme }) => theme.spacing.md}; 

      .blogpost__content {
        position: absolute;
        min-width: 20rem;
        bottom: ${({ theme }) => theme.spacing.sm};
        right: -${({ theme }) => theme.spacing.xl};
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.md}`}; 
      }

      h2 {
        color: ${({ theme }) => theme.colors.offWhite};

        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -${({ theme }) => theme.spacing.sm};
          left: 5%;
          width: ${({ theme }) => theme.spacing.lg};  
          height: ${({ theme }) => theme.spacing.xxxl};  
          background-color: ${({ theme }) => theme.colors.primaryDark};
          border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.md}`}; 
        }
      }

      h3 {
        color: ${({ theme }) => theme.colors.offWhite};
      }
    }

    .site-ref {
      display: none;
    }
  `
}

import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

const GlobalStyle = createGlobalStyle`
  ${fonts}
  
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontDescription};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.offWhite};
    font-size: ${({ theme }) => theme.fontSizeXS};
    color: #000;
  }

  input {
    margin-right: ${({ theme }) => theme.spacingS}; 
    min-height: 48px;
    padding:${({ theme }) => `0 ${theme.spacingS}`};
    border: none;
    border-radius: ${({ theme }) => `0 ${theme.spacingM} ${theme.spacingM}`};
    transition: ${({ theme }) => theme.transition}; 
  }

  input[type=text] {
    background-color: ${({ theme }) => theme.offWhiteLight};

    &:hover, &:focus {
      background-color: ${({ theme }) => theme.tertiaryColor};  
      color: ${({ theme }) => theme.offWhite}; 
      box-shadow: 0 6px 0 0 ${({ theme }) => theme.tertiaryColor}; 
      outline: 0; 

      &::placeholder {
        color: ${({ theme }) => theme.offWhite}; 
      }
    }
  }

  input[type=submit] {
    background-color: ${({ theme }) => theme.offWhiteDark};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontDescriptionBold};

    &:hover, &:focus {
      background-color: ${({ theme }) => theme.tertiaryColor};  
      color: ${({ theme }) => theme.offWhite}; 
      box-shadow: 0 6px 0 0 ${({ theme }) => theme.tertiaryColor};  
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing.sm};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.altOffWhite};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-image: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.spacing.sm};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }

  .global-wrapper {
    margin: ${({ theme }) => theme.spacing.sm} auto;
    max-width: 82rem;
    padding: 0;

    @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
      padding: ${({ theme }) => theme.spacing.sm};
    }
  }

  .styled-wrapper {
    width: 110%;
    margin-left: -5%;
    padding: ${({ theme }) => `0 5% ${theme.spacingXL}`};
    background-color: ${({ theme }) => theme.altOffWhite};
    border-radius: ${({ theme }) => `${theme.spacingXL} 0 ${theme.spacingXL} 0`};
  }

  .main-content {
    position: relative;
    z-index: 1;

    > .stroke-container {
      z-index: 100;
    }
  }
`

export default GlobalStyle

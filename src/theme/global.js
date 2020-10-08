import { createGlobalStyle } from 'styled-components'
import { fonts } from './_fonts'

const GlobalStyle = createGlobalStyle`
  ${fonts}
  
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontDescription};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.offWhite};
    font-size: ${({ theme }) => theme.fontSizeXS};
    color: ${({ theme }) => theme.primaryColor};
  }

  .styled-wrapper {
    width: 110%;
    margin-left: -5%;
    padding: ${({ theme }) => theme.spacingM} 0 0 5%;
    background-color: ${({ theme }) => theme.altOffWhite};
    border-radius: ${({ theme }) => `${theme.spacingXL} 0 ${theme.spacingXL} 0`};
  }
`

export default GlobalStyle

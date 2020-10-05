import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontDescription};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.offWhite};
    font-size: ${({ theme }) => theme.fontSizeXS};
    color: ${({ theme }) => theme.primaryColor};
  }
`

export default GlobalStyle

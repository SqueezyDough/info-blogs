import { theme } from 'theme'

export const baseStyling = `
  display: flex;
  flex-direction: column;

  h5 {
    margin: 3rem 0 0 0;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin-right: ${theme.spacingS}
    }
  }
`

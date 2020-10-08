import { theme } from 'theme'

export const baseStyling = `
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 30rem;

  h1 {
    text-transform: uppercase;
  }

  ::before {
    content: '';
    display: block;
    height: 30rem;
    width: ${theme.baseStroke.width};
    position: absolute;
    top: 0;
    z-index: -1;
    border-radius: 0 0 ${theme.baseStroke.width} ${theme.baseStroke.width};
    background-color: ${theme.tertiaryColor};
  }
`

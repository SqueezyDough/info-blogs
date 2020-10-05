import { theme } from 'theme'

export const baseStyling = `
  position: relative;
  height: 30rem;

  .stroke {
    display: block;
    width: 100%;
    height: ${theme.baseStroke.width};
    border-radius: ${theme.baseStroke.width} ${theme.baseStroke.width} 0 0;

    /* vertical stroke */
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: ${theme.baseStroke.width};
      height: 100%;
      border-radius: 0 ${theme.baseStroke.width} 0 ${theme.baseStroke.width};
    }

    /* inner corner rounding */
    &::before {
      content: '';
      position: absolute;
      top: ${theme.baseStroke.width};
      right: ${theme.baseStroke.width};
      width: 1rem;
      height: 3rem;
      border-radius: 0 ${theme.baseStroke.width} 0 ${theme.baseStroke.width};
    }
  }
`

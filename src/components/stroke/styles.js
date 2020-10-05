import { theme } from 'theme'

export const baseStyling = `
  .stroke {
    &.-vertical {
      position: absolute;
      display: block;
      width: ${theme.baseStroke.width};
      height: 100%;
      border-radius: ${theme.baseStroke.width} 0 0 ${theme.baseStroke.width};

      /* inner corner rounding */
      &::after {
        content: '';
        position: absolute;
        bottom: ${theme.baseStroke.width};
        left: ${theme.baseStroke.width};
        width: 1rem;
        height: 3rem;
        border-radius: ${`0 ${theme.baseStroke.width} 0 ${theme.baseStroke.width}`};
      }
    }

    &.-horizontal {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: ${theme.baseStroke.width};
      border-radius: 0 ${theme.baseStroke.width} 0 ${theme.baseStroke.width};
    }
  }
`

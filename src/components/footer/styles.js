import { theme } from 'theme'

export const baseStyling = `
  position: relative; 
  margin-top: -5.8rem;
  z-index: 1;
  idth: 100%;

  h5 {
    margin: 1rem 0;
  }

  .text-collaborate {
    max-width: 18rem;
  }

  .footer__actions {
    margin-top: ${theme.spacingL};
    display: flex;
    justify-content: space-between;
  }

  .footer__copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacingL};
    max-width: 11rem;
    color: #000;
    font-family: ${theme.fontTitle};
  }
`

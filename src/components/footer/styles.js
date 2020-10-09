import { theme } from 'theme'

export const baseStyling = `
  position: relative; 
  padding: ${theme.spacing.sm};
  margin-top: -5.8rem;
  z-index: 1;

  @media(min-width: ${theme.screens.md}) {
    padding: 0;
  }

  h5 {
    margin: 1rem 0;
  }

  .text-collaborate {
    max-width: 18rem;
  }

  .footer__actions {
    margin-top: ${theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    > form {
      margin-bottom: ${theme.spacing.md};
    }

    @media(min-width: ${theme.screens.sm}) {
      flex-direction: row;
      padding: 0;
    }
  }

  .footer__copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacing.lg};
    max-width: 11rem;
    color: #000;
    font-family: ${theme.fontTitle};
  }
`

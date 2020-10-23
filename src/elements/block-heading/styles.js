import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    z-index: 5;
    width: 4rem;
    min-width: 4rem;
    border: ${({ theme }) => `${theme.spacing.sm} solid`};
    border-left-width: 0;
    border-bottom-width: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing.md} 0`};

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      min-width: 8rem;
      background-color: ${({ theme }) => theme.colors.tertiaryDark};
      border-radius: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.lg}`};
    }

    @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
      min-width: 15rem;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: -${({ theme }) => theme.spacing.md};
      height: ${({ theme }) => `calc(100% + ${theme.spacing.md})`};
      width: ${({ theme }) => theme.spacing.lg};
      border-radius: ${({ theme }) => ` 0 ${theme.spacing.lg} 0 ${theme.spacing.lg}`};
    }
    
    h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: rotate(90deg) translate(-50%, -50%);
      transform-origin: 0 0;
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize.sm};
      letter-spacing: .1rem;
      color: ${({ theme }) => theme.offWhite};

      @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
        position: relative;
        transform: rotate(0deg) translate(0);
        top: unset; 
        left: unset;
      }
    }    
  `
}

export const primaryTheme = () => {
  return css`
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-color: ${({ theme }) => theme.colors.tertiary};
    
    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      background-color: ${({ theme }) => theme.colors.tertiaryDark};

      &::before {
        background-color: ${({ theme }) => theme.colors.tertiaryDark};
      }
    }
  `
}

export const secondaryTheme = () => {
  return css`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      background-color: ${({ theme }) => theme.colors.secondaryDark};

      &::before {
        background-color: ${({ theme }) => theme.colors.secondaryDark};
      }
    }
  `
}

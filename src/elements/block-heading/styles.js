import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    width: 4rem;
    min-width: 4rem;
    border: ${({ theme }) => `${theme.spacingM} solid ${theme.tertiaryColor}`};
    border-top-width: ${({ theme }) => theme.spacing.sm};
    border-right-width: ${({ theme }) => theme.spacing.sm};
    border-bottom-width: .5rem;
    border-left-width: 0;
    border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.lg} 0`};

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      min-width: 8rem;
      border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.lg}`};
      border-top-width: ${({ theme }) => theme.spacing.md};
    }

    @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
      min-width: 15rem;
      border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.lg}`};
      border-top-width: ${({ theme }) => theme.spacing.md};
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

export const StrokeTop = () => {
  return css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-width: 1rem;

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      margin-right: 1rem;
      min-width: 7rem;
      background-color: ${({ theme }) => theme.colors.primaryDark};

      &::before {
        content: '';
        position: absolute;
        z-index: 0;
        top: -${({ theme }) => theme.spacing.md};
        height: ${({ theme }) => theme.spacing.lg};
        width: ${({ theme }) => `calc(100% + ${theme.spacing.md})`};
        border-radius: ${({ theme }) => `0 ${theme.spacing.lg} 0 0`};
        background-color: ${({ theme }) => theme.primaryColorDark};
      }
    }

    @media(${({ theme }) => `min-width: ${theme.screens.md}`}) {
      min-width: 14rem;
    }
  `
}

export const StrokeLeft = () => {
  return css`
    border-bottom-width: 1rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    
    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      background-color: ${({ theme }) => theme.colors.tertiaryDark};

      &::before {
        content: '';
        position: absolute;
        z-index: 0;
        bottom: -${({ theme }) => theme.spacing.md};
        height: ${({ theme }) => `calc(100% + ${theme.spacing.md})`};
        width: ${({ theme }) => theme.spacing.lg};
        border-radius: ${({ theme }) => ` 0 ${theme.spacing.lg} 0 ${theme.spacing.lg}`};
        background-color: ${({ theme }) => theme.secondaryColorDark};
      }
    }
  `
}

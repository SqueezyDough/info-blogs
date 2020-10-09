import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    width: 8rem;
    min-width: 8rem;
    background-color: ${({ theme }) => theme.secondaryColorDark};
    border: ${({ theme }) => `${theme.spacingM} solid ${theme.tertiaryColor}`};
    border-top-width: ${({ theme }) => theme.spacing.md};
    border-right-width: ${({ theme }) => theme.spacing.sm};
    border-bottom-width: .5rem;
    border-left-width: 0;
    border-radius: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.lg}`};

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      min-width: 15rem;
    }
    
    h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: rotate(90deg) translate(-50%, -50%);
      transform-origin: 0 0;
      margin: 0;
      letter-spacing: .1rem;
      color: ${({ theme }) => theme.offWhite};

      @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
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
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.primaryColorDark};
    border-color: ${({ theme }) => theme.secondaryColor};
    border-bottom-width: 1rem;

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {
      min-width: 14rem;
    }

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
  `
}

export const StrokeLeft = () => {
  return css`
    border-bottom-width: 1rem;

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
  `
}

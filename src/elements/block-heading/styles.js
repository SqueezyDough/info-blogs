import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    align-items: center;
    padding-right: 4rem;
    white-space: nowrap;
    position: relative;
    width: 15rem;
    height: 16em;
    background-color: ${({ theme }) => theme.secondaryColorDark};
    border: ${({ theme }) => `${theme.spacingM} solid ${theme.tertiaryColor}`};
    border-top-width: ${({ theme }) => theme.spacingM};
    border-right-width: ${({ theme }) => theme.spacingM};
    border-bottom-width: .5rem;
    border-left-width: 0;
    border-radius: ${({ theme }) => `0 ${theme.spacingL} ${theme.spacingL}`};

    /* inner corner rounding */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      width: 1rem;
      height: 3rem;
      box-shadow: 0 -25px 0 0 ${({ theme }) => theme.tertiaryColor};   
      border-radius: ${({ theme }) => `0 ${theme.spacingL} 0 ${theme.spacingL}`};
    }
    
    h2 {
      position: relative;
      margin: 0 0 0 -2px;
      color: ${({ theme }) => theme.offWhite};
    }  
  `
}

export const StrokeTop = () => {
  return css`
    margin-right: 1rem;
    width: 14rem;
    background-color: ${({ theme }) => theme.primaryColorDark};
    border-color: ${({ theme }) => theme.secondaryColor};
    border-right-width: 1rem;
    border-bottom-width: 1rem;

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      top: -${({ theme }) => theme.spacingM};
      height: ${({ theme }) => theme.spacingL};
      width: ${({ theme }) => `calc(100% + ${theme.spacingM})`};
      border-radius: ${({ theme }) => `0 ${theme.spacingL} 0 0`};
      background-color: ${({ theme }) => theme.primaryColorDark};
    }

    &::after {
      top: 0;
      box-shadow: 0 -25px 0 0 ${({ theme }) => theme.primaryColorDark};  
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
      bottom: -${({ theme }) => theme.spacingM};
      height: ${({ theme }) => `calc(100% + ${theme.spacingM})`};
      width: ${({ theme }) => theme.spacingL};
      border-radius: ${({ theme }) => ` 0 ${theme.spacingL} 0 ${theme.spacingL}`};
      background-color: ${({ theme }) => theme.secondaryColorDark};
    }
  `
}

import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative; 
    padding: ${({ theme }) => theme.spacing.lg} 0;

    @media(${({ theme }) => `min-width: ${theme.screens.sm}`}) {

    }

    ol {
      display: flex;
      margin: 1rem 0 0;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
    }
  `
}

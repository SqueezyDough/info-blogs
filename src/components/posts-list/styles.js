import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative; 
    padding: ${({ theme }) => theme.spacing.lg} 0;

    ol {
      display: flex;
      margin: 1rem 0 0;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `
}

import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative; 
    padding: ${({ theme }) => theme.spacingL} 0;

    ol {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `
}

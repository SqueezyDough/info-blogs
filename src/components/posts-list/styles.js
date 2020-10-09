import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    padding: ${({ theme }) => theme.spacing.lg} 0;

    ol {
      display: flex;
      width: 100%;
      margin: 1rem 0 0 -6rem;
      padding: 2rem 0 0 6rem;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

      @media(min-width: ${({ theme }) => theme.screens.lg}) and (hover: hover) {
        > li {
          height: 100%;
          transition: margin ${({ theme }) => theme.transition};
         
          &:not(:first-of-type) {
            margin-left: -${({ theme }) => theme.spacing.xl};
          }
  
          &:hover {
            margin-top: -1rem;
  
            + li {
              margin-left: 1rem;
            }
          }
        }
      }
    }
  `
}

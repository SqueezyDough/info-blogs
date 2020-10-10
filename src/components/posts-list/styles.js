import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    padding: ${({ theme }) => theme.spacing.lg} 0;

    @media(min-width: ${({ theme }) => theme.screens.lg}) {
      width: calc(100% - ${({ theme }) => theme.spacing.lg});
    }

    ol {
      display: flex;
      margin: ${({ theme }) => `0 0 0 -${theme.spacing.xl}`};
      padding: ${({ theme }) => `${theme.spacing.md} 0 0 ${theme.spacing.xl}`};
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

      @media(min-width: ${({ theme }) => theme.screens.lg}) and (hover: hover) {
        padding-bottom: 1rem; 

        > li {
          height: 100%;
          transition: margin ${({ theme }) => theme.transition};
         
          &:not(:first-of-type) {
            margin-left: -${({ theme }) => theme.spacing.xl};
          }

          &:last-of-type {
            padding-right: ${({ theme }) => theme.spacing.xs};
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

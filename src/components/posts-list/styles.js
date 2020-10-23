import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    position: relative;
    z-index: 1;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    margin: ${({ theme }) => theme.spacing.lg} 0;

    ol {
      display: flex;
      width: 100%;
      margin: 0;
      padding: ${({ theme }) => `${theme.spacing.md} 0 0 0`};
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

      li {       
        &:first-of-type article {
          box-shadow: -1rem 0 1rem 0 #00000020;
        }
      }

      &::after {
        content: none;
        position: absolute;
        z-index: 1;
        margin-top: -1rem;
        right: 0;
        width: ${({ theme }) => theme.spacing.lg};  
        height: calc(100% + 2rem);  
        background: linear-gradient(to left, ${({ theme }) => theme.colors.tertiary}, transparent 8rem);
      
        @media(min-width: ${({ theme }) => theme.screens.lg}) {
          content: '';
        }
      }

      @media(min-width: ${({ theme }) => theme.screens.lg}) and (hover: hover) {
        padding-bottom: 1rem; 

        > li {
          height: 100%;
          transition: margin ${({ theme }) => theme.transition};
         
          &:not(:first-of-type) {
            margin-left: -${({ theme }) => theme.spacing.xl};
          }

          &:last-of-type {
            padding-right: ${({ theme }) => theme.spacing.sm};
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

import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: flex;
    flex-direction: column;
    height: 24rem;
    width: 10rem;
    margin-left: -10rem;
    position: relative;
    z-index: -1;
    overflow: hidden;
    background-color: ${({ theme }) => theme.secondaryColor}; 
    border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingL}`}; 
    border: ${({ theme }) => theme.spacingXS} solid ${({ theme }) => theme.secondaryColor}; 
    border-bottom-width: ${({ theme }) => theme.spacingM};
    transition: margin .5s;   
    
    .site-image {
      position: relative;
      height: 100%;

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        background-color: ${({ theme }) => theme.secondaryColor}80;  
        transition: background-color ${({ theme }) => theme.transition};
      }

      img {
        filter: blur(4px);
        height: 100%;
        transition: filter ${({ theme }) => theme.transition};
      }

      &:hover {
        ::after {
          background-color: ${({ theme }) => theme.secondaryColor}20;  
        }
        img {
          filter: blur(2px);
        }
      }
    }
  `
}

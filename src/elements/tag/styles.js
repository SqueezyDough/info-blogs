import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: inline-block;
    border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`};
    background-color: ${({ theme }) => theme.primaryColorLight};
    color: ${({ theme }) => theme.offWhite};
    font-family: ${({ theme }) => theme.fontDescriptionSemi};
    text-align: center;
    white-space: nowrap;
  `
}

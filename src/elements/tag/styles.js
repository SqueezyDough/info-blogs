import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    display: inline-block;
    border-radius: ${({ theme }) => `0 ${theme.spacingS} ${theme.spacingS}`};
    background-color: ${({ theme }) => theme.primaryColorDark};
    color: ${({ theme }) => theme.offWhiteDark};
    font-family: ${({ theme }) => theme.fontDescriptionSemi};
    text-align: center;
    white-space: nowrap;
  `
}

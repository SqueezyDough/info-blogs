import { theme } from 'theme'
import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
  `
}

export const fontFamily = weight => {
  switch (weight) {
    case 'regular':
      return `${theme.fontDescription}`
    case 'semiBold':
      return `${theme.fontDescriptionSemi}`
    case 'bold':
      return `${theme.fontDescriptionBold}`
    default:
      return `${theme.fontDescription}`
  }
}

export const fontSize = size => {
  switch (size) {
    case 'small':
      return '12px'
    case 'regular':
      return '14px'
    case 'large':
      return '16px'
    case 'extraLarge':
      return '20px'
    default:
      return '14px'
  }
}

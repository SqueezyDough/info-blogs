import { theme } from 'theme'
import { css } from 'styled-components'

export const baseStyling = () => {
  return css`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant: normal;
    line-height: 1;
  `
}

export const fontFamily = as => {
  switch (as) {
    case 'h1':
      return `${theme.fontTitle}`
    case 'h2':
      return `${theme.fontTitle}`
    case 'h3':
      return `${theme.fontTitle}`
    case 'h4':
      return `${theme.fontTitle}`
    case 'h5':
      return `${theme.fontTitle}`
    case 'h6':
      return `${theme.fontTitle}`
    default:
      return `${theme.fontTitle}`
  }
}

export const fontSize = as => {
  switch (as) {
    case 'h1':
      return '64px'
    case 'h2':
      return '36px'
    case 'h3':
      return '24px'
    case 'h4':
      return '20px'
    case 'h5':
      return '18px'
    case 'h6':
      return '16px'
    default:
      return '72px'
  }
}

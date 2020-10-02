export const baseStyling = `
  h1 {
    text-transform: uppercase;
  }

  ::before {
    content: '';
    display: block;
    height: 35rem;
    width: 6rem;
    position: absolute;
    top: 0;
    z-index: -1;
    border-radius: 0 0 5rem 5rem;
    background-color: red;
  }
`

const stroke = {
  width: '5rem'
}

export const baseStyling = `
  position: relative;
  box-sizing: border-box;
  height: 30rem;

  .stroke__end {
    display: block;
    width: 100%;
    height: ${stroke.width};
    background-color: red;
    border-radius: ${stroke.width} ${stroke.width} 0 0;

    &::before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      top: 5rem;
      right: 5rem;
      width: 1rem;
      height: 3rem;
      border-radius: 0 ${stroke.width} 0 ${stroke.width};
      box-shadow: 0 -25px 0 0 red;
    }

    &::after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      right: 0;
      width: ${stroke.width};
      height: 100%;
      background-color: red;
      border-radius: 0 ${stroke.width} 0 ${stroke.width};
    }
  }
`

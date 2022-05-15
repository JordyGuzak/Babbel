import styled, { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

const color = theme.variants('mode', 'variant', {
  default: { light: '#fff', dark: '#2f2f2f' },
  primary: { light: '#5dbee2', dark: '#5dbee2' },
  success: { light: '#80ed99', dark: '#57cc99' },
  warning: { light: '#fcbf49', dark: '#f77f00' },
});

const onColor = theme.variants('mode', 'variant', {
  default: { light: '#2f2f2f', dark: '#fff' },
  primary: { light: '#fff', dark: '#fff' },
  success: { light: '#2f2f2f', dark: '#fff' },
  warning: { light: '#2f2f2f', dark: '#fff' },
});

export const borderRadius = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
  rounded: '50%'
}

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Prompt', sans-serif;
}

body {
    background-color: ${color};
    color: ${onColor};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .blogs {
    width: 100%;
    flex-direction: column;
  }
}
`;

export const StyledButton = styled.button`
position: relative;
text-decoration: none;
font-size: 1.5rem;
font-family: inherit;
font-weight: bold;
padding: 0.5rem 1rem;
border-radius: 8px;
/* border: 2px solid transparent; */
border: none;
cursor: pointer;
user-select: none;
box-shadow: 0px 0px 4px black;
background-color: ${color};
color: ${onColor};
`

export const StyledSpan = styled.span`
  color: ${color};
`

export const StyledContainer = styled.div`
  background-color: ${color};
  color: ${onColor};
`


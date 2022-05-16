import { createGlobalStyle } from 'styled-components'
import { color, onColor } from '../styles'

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 12px;
}

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

export default GlobalStyles;
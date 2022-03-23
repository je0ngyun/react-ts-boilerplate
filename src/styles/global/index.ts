import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import normalize from 'styled-normalize'
import { Theme } from '@styles/theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  //${reset};
  //${normalize};
  * {
  box-sizing: border-box;
  }

  html,
  body {
    max-width: 390px;
    height: 100%;
    margin: 0px auto;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background_color};
    color: ${({ theme }) => theme.colors.text_color};
    transition-property: background-color, color;
    transition-duration: .5s;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import normalize from 'styled-normalize'
import { Theme } from '@styles/theme'
import 'antd/dist/antd.less'
import '@styles/antdCustomize/index.less'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  //${reset};
  //${normalize};
  * {
  box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    position: relative;
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

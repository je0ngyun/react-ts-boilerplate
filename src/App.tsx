import React from 'react'
import GlobalStyle from '@styles/global'
import Theme from '@styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Router from './routes/Router'
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

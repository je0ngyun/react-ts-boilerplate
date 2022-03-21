import React, { useEffect } from 'react'
import GlobalStyle from '@styles/global'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@store/theme'
import { lightTheme, darkTheme } from '@styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { getThemeFromStorage } from '@utils/storage'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router from './routes/Router'

function App() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState)
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme

  const queryClient = new QueryClient()

  useEffect(() => {
    const storageTheme = getThemeFromStorage()
    if (storageTheme !== undefined) {
      setCurrentTheme(storageTheme)
    }
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

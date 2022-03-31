import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@store/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/global'
import { lightTheme, darkTheme } from '@styles/theme'
import { getThemeFromStorage } from '@utils/storage'
import Header from './components/Layout/Header/index'
import Main from '@components/Layout/Main'
import Footer from '@components/Layout/Footer'

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
          <Header />
          <Main>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <Footer />
          </Main>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

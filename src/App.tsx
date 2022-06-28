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
import AuthContext from '@components/auth/AuthContext'
import Header from './components/layout/Header/index'
import Main from '@components/layout/Main'
import Footer from '@components/layout/Footer'

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
              <AuthContext>
                <Router />
              </AuthContext>
            </BrowserRouter>
          </Main>
          <Footer />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

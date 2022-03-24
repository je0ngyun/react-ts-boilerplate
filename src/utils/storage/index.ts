import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage'

import { ThemeFlag } from '@store/theme'

export const setThemeToStorage = (theme: ThemeFlag) => {
  setValueToLocalStorage('theme', theme)
}

export const getThemeFromStorage = () => {
  return getValueFromLocalStorage('theme')
}

export const setAccessTokenToStorage = (token: string) => {
  setValueToLocalStorage('token', token)
}

export const getAccessTokenFromStorage = () => {
  return getValueFromLocalStorage('token')
}

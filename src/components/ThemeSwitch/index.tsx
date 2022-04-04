import React from 'react'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@store/theme'
import { setThemeToStorage } from '@utils/storage'

const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  const handleClick = () => {
    if (theme === ThemeFlag.light) {
      setTheme(ThemeFlag.dark)
      setThemeToStorage(ThemeFlag.dark)
    } else {
      setTheme(ThemeFlag.light)
      setThemeToStorage(ThemeFlag.light)
    }
  }

  return <button onClick={handleClick}>Theme Switch</button>
}

export default ThemeSwitch

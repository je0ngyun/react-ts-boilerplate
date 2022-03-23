import * as commons from './common'

import { lightColors } from './lightColor'
import { darkColors } from './darkColor'

export const lightTheme = {
  colors: lightColors,
  ...commons,
}

export const darkTheme = {
  colors: darkColors,
  ...commons,
}

export type Theme = typeof lightTheme | typeof darkTheme

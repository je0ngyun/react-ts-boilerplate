const win = typeof window !== `undefined` ? window : ({} as Storage)

export const localStorage = win.localStorage
export const sessionStorage = win.sessionStorage

export type StroageGetMethod = (key: string) => any
export type StroageSetMethod = (
  key: string,
  data: object | number | string
) => any

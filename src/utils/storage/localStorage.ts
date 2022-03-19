import { StroageGetMethod, StroageSetMethod, localStorage } from './core'

export const setValueToLocalStorage: StroageSetMethod = (key, data) => {
  if (!localStorage || localStorage === {}) {
    return
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export const getValueFromLocalStorage: StroageGetMethod = (key) => {
  const raw = localStorage.getItem(key)
  if (!raw) {
    return
  }
  return JSON.parse(raw)
}

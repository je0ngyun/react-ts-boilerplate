import { atom } from 'recoil'

export const defaultLoginValue = {
  id: -1,
  accessToken: '',
  username: '',
  userID: '',
  userEmail: '',
}

export const loginUserState = atom<LoginUser | null | undefined>({
  key: 'loginUserState',
  default: undefined,
})

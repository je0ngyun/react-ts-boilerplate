import { LoginUser } from '@api/types/user'
import { atom } from 'recoil'

export const loginUserState = atom<LoginUser>({
  key: 'loginUserState',
  default: {
    id: -1,
    accessToken: '',
    username: '',
    userID: '',
    userEmail: '',
  },
})

export const authState = atom<boolean>({
  key: 'authState',
  default: false,
})

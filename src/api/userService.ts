import { Test } from './types/user'

export interface UserService {
  getUserInfo(): Promise<Test>
}

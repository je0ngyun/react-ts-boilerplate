import { userDataRemote } from './remote/user'
import { userDataMock } from './mock/user'
import { UserService } from './userService'

const provideAPIService = () => {
  const userService = userDataRemote()
  return {
    userService,
  }
}
export const api = provideAPIService()

export interface APIService {
  userService: UserService
}

import { UserService } from '@api/service/userService'

export const userDataMock = (): UserService => ({
  getUserInfo: async () => {
    await wait(1500)
    return {} as LoginUser
  },
})

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

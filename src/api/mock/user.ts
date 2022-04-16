import { UserService } from '@api/userService'

export const userDataMock = (): UserService => ({
  getUserInfo: async () => {
    await wait(1500)
    return { name: 'jeongyun' }
  },
})

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

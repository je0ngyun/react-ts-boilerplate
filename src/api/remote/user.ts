import { publicAPI } from '@api/core'
import { UserService } from '@api/service/userService'
import { throwError } from '@api/utils/throwError'

export const userDataRemote = (): UserService => ({
  getUserInfo: async () => {
    try {
      const response = await publicAPI.get({
        url: `/`,
      })
      return response.data
    } catch (error) {
      throwError(error)
    }
  },
})

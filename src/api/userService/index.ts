import { AxiosError } from 'axios'
import { publicAPI } from '../core'
import { NotFoundError, UnauthorizedError } from '../types/error'

export const userService = {
  getUserInfo: async () => {
    const response = await publicAPI.get({
      url: `/`,
    })
    return response.data
  },
}

import { AxiosError } from 'axios'
import { publicAPI } from '../core'
import { NotFoundError, UnauthorizedError } from '../types/error'

export const userService = {
  getUserInfo: async () => {
    try {
      const response = await publicAPI.get({
        url: `/`,
      })
      return response.data
    } catch (error) {
      if ((error as AxiosError).response?.status === 401) {
        throw new UnauthorizedError('권한이 없는 사용자입니다.')
      }
      throw error
    }
  },
}

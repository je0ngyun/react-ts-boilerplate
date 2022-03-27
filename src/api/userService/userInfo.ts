import { AxiosError } from 'axios'
import { publicAPI } from '../core'
import { NotFoundError, UnauthorizedError } from '../types/error'

//test
export const getUserInfo = async () => {
  try {
    const response = await publicAPI.get({
      url: `/`,
    })
    return response.data
  } catch (e) {
    throw new UnauthorizedError('권한이 없습니다.')
  }
}

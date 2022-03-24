import { AxiosError } from 'axios'
import { publicAPI } from '../core'
import { NotFoundError } from '../types/error'

//test
export const getUserInfo = async () => {
  const response = await publicAPI.get({
    url: `/`,
  })
  if (response.axiosStatus === 404)
    throw new NotFoundError('사용자를 찾을 수 없습니다.')
  return response.data
}

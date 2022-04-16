import { AxiosError } from 'axios'
import { NotFoundError, UnauthorizedError } from '../types/error'

export const throwError = (error: unknown) => {
  const status = (error as AxiosError).response?.status
  switch (status) {
    case 401:
      throw new UnauthorizedError('권한이 없는 사용자입니다.')
    default:
      throw error
  }
}

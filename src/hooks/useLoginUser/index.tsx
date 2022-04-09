import React from 'react'
import { LoginUser } from '@api/types/user'
import { authState, loginUserState } from '@store/loginUser'
import { useRecoilState } from 'recoil'

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)

  return {
    ...loginUser,
    isAuthenticated,
  }
}

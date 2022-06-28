import React from 'react'
import { LoginUser } from '@api/types/user'
import { loginUserState } from '@store/loginUser'
import { useRecoilState } from 'recoil'

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)

  return {
    ...loginUser,
  }
}

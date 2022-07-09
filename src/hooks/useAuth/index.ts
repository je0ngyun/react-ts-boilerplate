import React, { useContext } from 'react'
import { AuthContext } from '@components/auth/AuthContext'

interface ContextMethods {
  user: LoginUser
  login: (data: LoginUser) => void
  logout: () => void
}

export const useAuth = () => {
  return useContext<ContextMethods>(AuthContext)
}

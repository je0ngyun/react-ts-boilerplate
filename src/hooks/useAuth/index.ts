import React, { useContext } from 'react'
import { AuthContext, ContextValues } from '@components/auth/AuthContext'

export const useAuth = () => {
  return useContext<ContextValues>(AuthContext)
}

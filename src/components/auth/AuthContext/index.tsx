import React, { useEffect } from 'react'
import { loginUserState } from '@store/loginUser'
import { ReactNode } from 'react'
import { createContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { defaultValue } from '@store/loginUser'
import { LoginUser } from '@api/types/user'

export const AuthContext = createContext<any>(null)

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useRecoilState(loginUserState)
  const navigate = useNavigate()

  const login = async (data: LoginUser) => {
    setUser(data)
    navigate('/home')
  }

  const logout = () => {
    setUser(defaultValue)
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  )
  useEffect(() => {
    setTimeout(() => {
      setUser(null)
    }, 1500)
  }, [])
  return (
    <AuthContext.Provider value={value as any}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

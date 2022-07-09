import React, { useEffect } from 'react'
import { loginUserState } from '@store/loginUser'
import { ReactNode } from 'react'
import { createContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { defaultLoginValue } from '@store/loginUser'

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
    setUser(null)
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

  //사용자가 새로고침시 토큰 검증
  useEffect(() => {
    //1.리프레시 토큰이 없는 경우 -> logout()
    //2.리프레시 토큰이 있는 경우 -> fetching()
    //2.1 리프레시 토큰 검증 성공 -> setUser(user)
    setTimeout(() => setUser(defaultLoginValue), 1000)
    //2.2 리프레시 토큰 검증 실패 -> setUser(null)
    //setTimeout(() => setUser(null), 1000)
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider

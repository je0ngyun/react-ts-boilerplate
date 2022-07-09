import { useAuth } from '@hooks/useAuth'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { logout } = useAuth()
  return (
    <>
      홈화면
      <button onClick={logout}>로그아웃</button>
      <Link to="/home/private">프라이빗 페이지</Link>
    </>
  )
}

export default Home

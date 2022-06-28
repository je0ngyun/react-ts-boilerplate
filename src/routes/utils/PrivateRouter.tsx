import React from 'react'
import { useAuth } from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const PraviteRouter = () => {
  const { user } = useAuth()

  if (user === undefined) {
    return <>Loading</>
  }

  if (user === null) {
    return <Navigate to="/" />
  }

  console.log(user)

  return (
    <>
      <Outlet />
    </>
  )
}

export default PraviteRouter

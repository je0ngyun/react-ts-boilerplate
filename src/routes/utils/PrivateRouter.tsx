import React, { useEffect } from 'react'
import { useAuth } from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const PraviteRouter = () => {
  const { user } = useAuth()

  console.log(user)

  if (user === undefined) {
    return <>Loading</>
  }

  if (user === null) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default PraviteRouter

import React from 'react'
import { useLoginUser } from '@hooks/useLoginUser'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import ErrorBoundary from '@components/Error/ErrorBoundary'
import GlobalErrorFallBack from '@components/Error/GlobalErrorFallBack'

const PrivateRouter = () => {
  const location = useLocation()
  const loginStateCheck = () => {
    const { isAuthenticated } = useLoginUser()
    return isAuthenticated ? <Outlet /> : <Navigate to="/login?need" />
  }
  return (
    <ErrorBoundary key={location.pathname} fallback={<GlobalErrorFallBack />}>
      {loginStateCheck()}
    </ErrorBoundary>
  )
}

export default PrivateRouter

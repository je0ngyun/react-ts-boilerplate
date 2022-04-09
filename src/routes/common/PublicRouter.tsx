import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import ErrorBoundary from '@components/Error/ErrorBoundary'
import GlobalErrorFallBack from '@components/Error/GlobalErrorFallBack'

const PublicRouter = () => {
  const location = useLocation()
  return (
    <ErrorBoundary key={location.pathname} fallback={<GlobalErrorFallBack />}>
      <Outlet />
    </ErrorBoundary>
  )
}

export default PublicRouter

import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '@components/error/ErrorBoundary'
import GlobalErrorFallBack from '@components/error/GlobalErrorFallBack'
import Home from '@pages/Home'
import Login from '@pages/Login'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <ErrorBoundary fallback={<GlobalErrorFallBack />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default Router

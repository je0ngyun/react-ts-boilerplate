import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '@components/common/ErrorBoundary'
import Test from '@pages/Home'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <ErrorBoundary fullback={<></>}>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default Router

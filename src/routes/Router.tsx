import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import QueryBoundary from '@components/common/QueryBoundary'
import Home from '@pages/Home'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <QueryBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </QueryBoundary>
      </Suspense>
    </>
  )
}

export default Router

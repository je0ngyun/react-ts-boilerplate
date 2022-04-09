import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingRouter from './LandingRouter'
import HomeRouter from './HomeRouter'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<LandingRouter />} />
          <Route path="/home/*" element={<HomeRouter />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Router

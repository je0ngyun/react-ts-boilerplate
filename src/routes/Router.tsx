import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from '@pages/Home'

const Router = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Router

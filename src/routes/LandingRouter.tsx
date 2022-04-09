import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRouter from './common/PublicRouter'
import Landing from '@pages/Landing'
import Login from '@pages/Login'

const LandingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default LandingRouter

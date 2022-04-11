import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRouter from './common/PublicRouter'
import Landing from '@pages/Landing'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

const LandingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default LandingRouter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '@pages/Home'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default HomeRouter

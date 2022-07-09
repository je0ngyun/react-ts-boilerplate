import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './utils/PrivateRouter'
import Home from '@pages/Home'
import PrivatePage from '@pages/PrivatePage'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<PrivatePage />} />
      </Route>
    </Routes>
  )
}

export default HomeRouter

import React from 'react'
import { NotFoundError, UnauthorizedError } from '@api/types/error'
import { Navigate } from 'react-router-dom'

interface Props {
  error?: Error
}
const GlobalErrorFallBack = ({ error }: Props) => {
  let render = null
  ;(function () {
    switch (error?.constructor) {
      case UnauthorizedError:
        render = <Navigate to="/login?expire" />
        break
      case NotFoundError:
        render = <div>404 Error</div>
        break
    }
  })()
  return <>{render}</>
}

export default GlobalErrorFallBack

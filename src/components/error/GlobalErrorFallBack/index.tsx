import React from 'react'
import { NotFoundError, UnauthorizedError } from '@api/types/error'

interface Props {
  error?: Error
}
const GlobalErrorFallBack = ({ error }: Props) => {
  let render = null
  ;(function () {
    switch (error?.constructor) {
      case UnauthorizedError:
        window.location.href = './login?expire'
        break
      case NotFoundError:
        render = <div>404 Error</div>
        break
    }
  })()
  if (render) {
    return render
  }
  return <>Uncatched</>
}

export default GlobalErrorFallBack

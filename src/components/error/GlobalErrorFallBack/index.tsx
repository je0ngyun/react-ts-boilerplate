import React, { useEffect } from 'react'

interface Props {
  errorCode?: number
}

const GlobalErrorFallBack = ({ errorCode }: Props) => {
  ;(function () {
    switch (errorCode) {
      case 401:
        window.location.href = './login?expire'
    }
  })()
  return (
    <div>
      전역에러 fall Back
      {errorCode}
    </div>
  )
}

export default GlobalErrorFallBack

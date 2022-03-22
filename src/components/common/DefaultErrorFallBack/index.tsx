import React from 'react'

interface Props {
  resetBoundary: () => void
}

const DefaultErrorFallBack = ({ resetBoundary }: Props) => {
  return (
    <div>
      <div>에러발생</div>
      <button onClick={resetBoundary}>재시도</button>
    </div>
  )
}

export default DefaultErrorFallBack

import React from 'react'

interface Props {
  resetBoundary?: () => void
}

const DefaultErrorFallBack = ({ resetBoundary }: Props) => {
  return (
    <div>
      <div>기본 쿼리 FallBack</div>
      <button onClick={resetBoundary}>재시도</button>
    </div>
  )
}

export default DefaultErrorFallBack

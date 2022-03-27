import React from 'react'

interface Props {
  resetboundary: () => void
}

const DefaultErrorFallBack = ({ resetboundary }: Props) => {
  return (
    <div>
      <div>기본에러fallBack</div>
      <button onClick={resetboundary}>재시도</button>
    </div>
  )
}

export default DefaultErrorFallBack

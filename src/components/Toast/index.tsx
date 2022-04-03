import React from 'react'
import { StToast } from './style'

interface Props {
  content: string
  containerRef: React.RefObject<HTMLDivElement>
}

const Toast = ({ content, containerRef }: Props) => {
  return <StToast ref={containerRef}>{content}</StToast>
}

export default Toast

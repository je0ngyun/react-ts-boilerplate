import React from 'react'
import { StToast } from './style'

interface Props {
  content: string
}

const Toast = React.forwardRef<HTMLDivElement, Props>(({ content }, ref) => {
  return <StToast ref={ref}>{content}</StToast>
})

Toast.displayName = 'Toast'

export default Toast

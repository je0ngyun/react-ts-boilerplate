import React, { ReactNode } from 'react'
import { StMain } from './style'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return <StMain>{children}</StMain>
}

export default Main

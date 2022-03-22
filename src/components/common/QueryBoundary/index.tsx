import React, { ReactElement } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '../ErrorBoundary'

interface Props {
  children: ReactElement
  fallback?: ReactElement
}

const QueryBoundary = ({ children, fallback }: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary fallback={fallback} resetQuery={reset}>
      {children}
    </ErrorBoundary>
  )
}

export default QueryBoundary

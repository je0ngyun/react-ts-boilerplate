import React, { ReactElement } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '../ErrorBoundary'

interface Props {
  children: ReactElement
  fallback?: ReactElement
  ignoreCase?: number[]
}

const defaultIgnoreCase: number[] = [401]

const QueryBoundary = ({ children, fallback, ignoreCase = [] }: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      fallback={fallback}
      resetQuery={reset}
      ignoreCase={new Set([...defaultIgnoreCase, ...ignoreCase])}
    >
      {children}
    </ErrorBoundary>
  )
}

export default QueryBoundary

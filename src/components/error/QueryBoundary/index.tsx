import React, { ReactElement } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '@components/Error/ErrorBoundary'
import DefaultErrorFallBack from '@components/Error/DefaultQueryFallBack'
import { CustomErrorClass, UnauthorizedError } from '@api/types/error'

interface Props {
  children: ReactElement
  fallback?: JSX.Element
  ignoreError?: Array<CustomErrorClass>
}

const QueryBoundary = ({
  children,
  fallback,
  ignoreError = [UnauthorizedError],
}: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      fallback={fallback || <DefaultErrorFallBack />}
      ignoreError={new Set(ignoreError)}
      resetQuery={reset}
    >
      {children}
    </ErrorBoundary>
  )
}

export default QueryBoundary

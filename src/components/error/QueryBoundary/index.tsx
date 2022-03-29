import React, { ReactElement } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '../ErrorBoundary'
import DefaultErrorFallBack from '@components/Error/DefaultQueryFallBack'
import { CustomErrorClass, UnauthorizedError } from '@api/types/error'

interface Props {
  children: ReactElement
  fallback?: JSX.Element
  ignoreCase?: Array<CustomErrorClass>
}

const QueryBoundary = ({
  children,
  fallback,
  ignoreCase = [UnauthorizedError],
}: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      fallback={fallback || <DefaultErrorFallBack />}
      ignoreCase={new Set(ignoreCase)}
      resetQuery={reset}
    >
      {children}
    </ErrorBoundary>
  )
}

export default QueryBoundary

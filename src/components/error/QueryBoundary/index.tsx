import React, { ReactElement, Suspense } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '@components/Error/ErrorBoundary'
import DefaultErrorFallBack from '@components/Error/DefaultQueryFallBack'
import { CustomErrorClass, UnauthorizedError } from '@api/types/error'

interface Props {
  children: ReactElement
  loadingFallback?: ReactElement
  errorFallback?: JSX.Element
  ignoreError?: CustomErrorClass[]
}

const defaultIgnoreError: CustomErrorClass[] = [UnauthorizedError]

const QueryBoundary = ({
  children,
  loadingFallback,
  errorFallback,
  ignoreError = [],
}: Props) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      fallback={errorFallback || <DefaultErrorFallBack />}
      ignoreError={new Set([...defaultIgnoreError, ...ignoreError])}
      resetQuery={reset}
    >
      <Suspense fallback={loadingFallback || <></>}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default QueryBoundary

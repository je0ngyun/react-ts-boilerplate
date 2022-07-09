import React, {
  ReactElement,
  ReactNode,
  Suspense,
  forwardRef,
  useRef,
  Ref,
  useImperativeHandle,
} from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from '@components/suspense/ErrorBoundary'
import DefaultErrorFallBack from '@components/suspense/DefaultQueryFallBack'

interface Props {
  children: ReactNode
  loadingFallback?: ReactElement
  errorFallback?: ReactElement
  ignoreError?: CustomErrorClass[]
}

interface ResetRef {
  reset?(): void
}

const defaultIgnoreError: CustomErrorClass[] = [UnauthorizedError]

const QueryBoundary = forwardRef(
  (
    { children, loadingFallback, errorFallback, ignoreError = [] }: Props,
    resetRef: Ref<ResetRef>
  ) => {
    const { reset } = useQueryErrorResetBoundary()
    const ref = useRef<ErrorBoundary | null>(null)

    useImperativeHandle(resetRef, () => ({
      reset: () => ref.current?.resetBoundary(),
    }))

    return (
      <ErrorBoundary
        ref={ref}
        fallback={errorFallback || <DefaultErrorFallBack />}
        ignoreError={new Set([...defaultIgnoreError, ...ignoreError])}
        resetQuery={reset}
      >
        <Suspense fallback={loadingFallback || <></>}>{children}</Suspense>
      </ErrorBoundary>
    )
  }
)

QueryBoundary.displayName = 'QueryBoundary'

export default QueryBoundary

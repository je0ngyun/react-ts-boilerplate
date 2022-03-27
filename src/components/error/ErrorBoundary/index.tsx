import React, { Component, ErrorInfo, cloneElement, ReactElement } from 'react'
import DefaultErrorFallBack from '@components/error/DefaultErrorFallBack'
import { CustomError } from '@api/types/error'

interface Props {
  children: ReactElement
  fallback?: JSX.Element
  resetQuery?: () => void
  ignoreCase?: Set<number>
}

interface State {
  hasError: boolean
  errorCode: number | null
}
const initialState: State = { hasError: false, errorCode: null }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(error: CustomError): State {
    return { hasError: true, errorCode: error.code }
  }

  resetboundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  componentDidCatch(error: CustomError, errorInfo: ErrorInfo) {
    // error record
  }

  isIgnoreCase() {
    return this.props.ignoreCase?.has(this.state.errorCode as number)
  }

  render() {
    if (this.state.hasError && !this.isIgnoreCase()) {
      if (this.props.fallback) {
        return cloneElement(this.props.fallback, {
          resetboundary: this.resetboundary,
          errorCode: this.state.errorCode,
        })
      }
      return <DefaultErrorFallBack resetboundary={this.resetboundary} />
    }
    return this.props.children
  }
}

export default ErrorBoundary

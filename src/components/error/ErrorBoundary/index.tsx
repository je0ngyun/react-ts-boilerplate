import React, { Component, ErrorInfo, cloneElement, ReactElement } from 'react'
import { CustomError, CustomErrorClass } from '@api/types/error'

interface Props {
  children: ReactElement
  fallback: JSX.Element
  ignoreCase?: Set<CustomErrorClass>
  resetQuery?: () => void
}

interface State {
  hasError: boolean
  error: CustomError | null
}

const initialState: State = { hasError: false, error: null }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(error: CustomError): State {
    return { hasError: true, error: error }
  }

  resetBoundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  componentDidCatch(error: CustomError, errorInfo: ErrorInfo) {}

  isIgnoreCase() {
    return this.props.ignoreCase?.has(
      this.state.error?.constructor as CustomErrorClass
    )
  }

  render() {
    if (this.state.hasError && !this.isIgnoreCase()) {
      return cloneElement(this.props.fallback, {
        resetBoundary: this.resetBoundary,
        error: this.state.error,
      })
    }
    return this.props.children
  }
}

export default ErrorBoundary

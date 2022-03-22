import React, { Component, ErrorInfo, cloneElement, ReactElement } from 'react'
import DefaultErrorFallBack from '@components/common/DefaultErrorFallBack'

interface Props {
  children: ReactElement
  fallback?: ReactElement
  resetQuery?: () => void
}

interface State {
  hasError: boolean
}
const initialState: State = { hasError: false }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  resetBoundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return cloneElement(this.props.fallback, {
          resetBoundary: this.resetBoundary,
        })
      }
      return <DefaultErrorFallBack resetBoundary={this.resetBoundary} />
    }
    return this.props.children
  }
}

export default ErrorBoundary

import React, {
  Component,
  ErrorInfo,
  cloneElement,
  ReactElement,
  ReactNode,
} from 'react'
import { CustomErrorClass } from '@api/types/error'

interface Props {
  children: ReactNode
  fallback: ReactElement
  ignoreError?: Set<CustomErrorClass>
  resetQuery?: () => void
}

interface State {
  hasError: boolean
  error: Error | null
}

const initialState: State = { hasError: false, error: null }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error }
  }

  resetBoundary = () => {
    this.props.resetQuery?.()
    this.setState(initialState)
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  isIgnoreError() {
    return this.props.ignoreError?.has(
      this.state.error?.constructor as CustomErrorClass
    )
  }

  render() {
    if (this.state.hasError && !this.isIgnoreError()) {
      return cloneElement(this.props.fallback, {
        resetBoundary: this.resetBoundary,
        error: this.state.error,
      })
    }
    return this.props.children
  }
}

export default ErrorBoundary

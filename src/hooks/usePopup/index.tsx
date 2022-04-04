import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import Deffered from '@utils/deferred'
import Popup from '@components/Popup'

interface OpenProps {
  render: JSX.Element
  cancelButton?: boolean
}

const execOutAnimation = (container: HTMLDivElement | null) => {
  container?.classList.add('slide-down')
}

const usePopup = () => {
  const container = useRef<HTMLDivElement>(null)

  const openPopup = async ({ render, cancelButton = true }: OpenProps) => {
    const deferred = new Deffered()
    const node = document.createElement('div')
    document.body.appendChild(node)

    const handleConfirm = () => {
      execOutAnimation(container.current)
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node)
        deferred.resolve(true)
        node.remove()
      }, 150)
    }

    const handleCancle = () => {
      execOutAnimation(container.current)
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node)
        deferred.resolve(false)
        node.remove()
      }, 150)
    }

    ReactDOM.render(
      <Popup
        render={render}
        cancelButton={cancelButton}
        ref={container}
        handleCancle={handleCancle}
        handleConfirm={handleConfirm}
      />,
      node
    )
    return await deferred
  }
  return { openPopup }
}

export default usePopup

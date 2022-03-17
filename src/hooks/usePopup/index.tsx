import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { StPopupContainer, StPopup } from './style'
import Deffered from '@utils/deferred'

interface PopupProps {
  render: JSX.Element
  cancelButton?: boolean
}

const outAnimation = (
  container: HTMLDivElement | null,
  content: HTMLDivElement | null
) => {
  content !== null && content.classList.add('slide-down')
  container !== null && container.classList.add('fade-out')
}

const usePopup = () => {
  const container = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)

  const openPopup = async ({ render, cancelButton = true }: PopupProps) => {
    const deferred = new Deffered()
    const node = document.createElement('div')
    document.body.appendChild(node)

    const handleConfirm = () => {
      outAnimation(container.current, content.current)
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node)
        deferred.resolve(true)
        node.remove()
      }, 220)
    }

    const handleCancle = () => {
      outAnimation(container.current, content.current)
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node)
        deferred.resolve(false)
        node.remove()
      }, 220)
    }

    const PopupContent = () => {
      return (
        <StPopupContainer ref={container}>
          <StPopup ref={content}>
            {render && <div>{render}</div>}
            <button onClick={handleConfirm}>확인</button>
            {cancelButton && <button onClick={handleCancle}>취소</button>}
          </StPopup>
        </StPopupContainer>
      )
    }

    ReactDOM.render(<PopupContent />, node)
    return await deferred
  }
  return openPopup
}

export default usePopup

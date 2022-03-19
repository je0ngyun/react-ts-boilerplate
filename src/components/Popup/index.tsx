import React from 'react'
import { StPopupContainer, StPopup } from './style'

interface PopupProps {
  render: JSX.Element
  cancelButton?: boolean
  containerRef: React.RefObject<HTMLDivElement>
  contentRef: React.RefObject<HTMLDivElement>
  handleConfirm: () => void
  handleCancle: () => void
}

const Popup = ({
  render,
  cancelButton,
  containerRef,
  contentRef,
  handleCancle,
  handleConfirm,
}: PopupProps) => {
  return (
    <StPopupContainer ref={containerRef}>
      <StPopup ref={contentRef}>
        {render && <div>{render}</div>}
        <button onClick={handleConfirm}>확인</button>
        {cancelButton && <button onClick={handleCancle}>취소</button>}
      </StPopup>
    </StPopupContainer>
  )
}

export default Popup

import React from 'react'
import { StPopupContainer, StPopup } from './style'

interface PopupProps {
  render: JSX.Element
  cancelButton?: boolean
  handleConfirm: () => void
  handleCancle: () => void
}

const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  ({ render, cancelButton, handleCancle, handleConfirm }, ref) => {
    return (
      <StPopupContainer>
        <StPopup ref={ref}>
          {render && <div>{render}</div>}
          <button onClick={handleConfirm}>확인</button>
          {cancelButton && <button onClick={handleCancle}>취소</button>}
        </StPopup>
      </StPopupContainer>
    )
  }
)

Popup.displayName = 'Popup'

export default Popup

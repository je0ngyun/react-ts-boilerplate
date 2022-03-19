import styled from 'styled-components'
import { slideUp, slideDown, fadeIn, fadeOut } from '@styles/common/animation'

export const StPopupContainer = styled.div`
  &.fadeOut {
    animation-name: ${fadeOut};
  }
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  backdrop-filter: blur(2px);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`

export const StPopup = styled.div`
  * {
    width: 100%;
    margin-bottom: 5px;
  }
  &.slide-down {
    animation-name: ${slideDown('200px')};
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  background-color: #c0c7da;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp('200px')};
  animation-fill-mode: forwards;
`

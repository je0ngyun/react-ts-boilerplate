import styled from 'styled-components'
import { slideUp, slideDown } from '@styles/common/animation'
export const StToast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 90%;
  min-height: 50px;
  top: 92%;
  left: calc(-50vw + 50%);
  right: calc(-50vw + 50%);
  margin-left: auto;
  margin-right: auto;
  background-color: #ddd;
  border-radius: 5px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp('200px')};

  &.slide-down {
    animation-name: ${slideDown('200px')};
  }
`

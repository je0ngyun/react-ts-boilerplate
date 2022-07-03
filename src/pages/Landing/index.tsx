import useModal from '@hooks/useModal'
import styled from 'styled-components'
import React from 'react'

const TestModalContent = styled.div`
  width: 400px;
  height: 400px;
`

const TestModalComponent = ({ onConfirm }: any) => {
  return (
    <TestModalContent>
      <div>테스트</div>
      <button onClick={onConfirm}>OK</button>
    </TestModalContent>
  )
}

const LandingPage = () => {
  const [showModal, setModalContent] = useModal(<TestModalComponent />)

  return (
    <>
      <button onClick={showModal}>모달</button>
    </>
  )
}

export default LandingPage

import useModal from '@hooks/useModal'
import styled from 'styled-components'
import React from 'react'

const TestModalContent = styled.div`
  width: 400px;
  height: 400px;
`

const TestModalComponent = ({ onConfirm, onCancel }: any) => {
  return (
    <TestModalContent>
      <div>TEST Modal</div>
      <button onClick={onConfirm}>OK</button>
      <button onClick={onCancel}>Cancel</button>
    </TestModalContent>
  )
}

const LandingPage = () => {
  const [showModal] = useModal()

  const asyncModal = async () => {
    const flag = await showModal(<TestModalComponent />)
    console.log(flag)
  }
  return (
    <>
      <button onClick={() => asyncModal()}>Modal</button>
    </>
  )
}

export default LandingPage

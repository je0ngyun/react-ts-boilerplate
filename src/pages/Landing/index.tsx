import useModal from '@hooks/useModal'
import styled from 'styled-components'
import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const TestModalContent = styled.div`
  width: 400px;
  height: 400px;
`

const fetchTestData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}

const TestModalComponent = ({ onConfirm, onCancel }: any) => {
  const { data } = useQuery('testFetch', fetchTestData, {
    staleTime: 30000,
    onSuccess(data) {
      console.log(data)
    },
  })
  return (
    <TestModalContent>
      <div>TEST Modal</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => onConfirm(() => {})}>OK</button>
      <button onClick={() => onCancel()}>Cancel</button>
    </TestModalContent>
  )
}

const LandingPage = () => {
  const [showModal] = useModal({ recoil: true, reactQuery: true })

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

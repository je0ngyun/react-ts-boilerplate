import React, { useEffect } from 'react'
import useModal from '@hooks/useModal'
import { useQuery } from 'react-query'
import { useAuth } from '@hooks/useAuth'
import { defaultLoginValue } from '@store/loginUser'

import styled from 'styled-components'
import tw from 'twin.macro'

const TestModalContent = styled.div`
  width: 400px;
  height: 400px;
`

const TestButton = styled.button`
  ${tw`p-4`}
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
  const { login, logout, user } = useAuth()

  const asyncModal = async () => {
    const flag = await showModal(<TestModalComponent />)
    console.log(flag)
  }

  useEffect(() => {
    console.log(!!user)
  }, [user])

  return (
    <>
      <TestButton onClick={() => asyncModal()}>Modal</TestButton>
      {user && <button onClick={() => logout()}>로그아웃</button>}
      {!user && (
        <button onClick={() => login(defaultLoginValue)}>로그인</button>
      )}
    </>
  )
}

export default LandingPage

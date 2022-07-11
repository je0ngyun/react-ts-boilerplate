import React, { cloneElement, useEffect } from 'react'
import useModal from '@hooks/useModal'
import { useQuery } from 'react-query'
import { useAuth } from '@hooks/useAuth'
import { defaultLoginValue } from '@store/loginUser'
import DaumPostcodeEmbed from 'react-daum-postcode'

import styled from 'styled-components'
import tw from 'twin.macro'

const TestModalContent = styled.div`
  width: 400px;
`

const TestButton = styled.button`
  ${tw`p-4`}
`

const fetchTestData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}

const TestModalComponent = ({ onConfirm, onCancel, children }: any) => {
  const { data } = useQuery('testFetch', fetchTestData, {
    staleTime: 30000,
    onSuccess(data) {
      console.log(data)
    },
  })
  const child = React.Children.only(children)
  const attached = cloneElement(child, {
    onComplete: (data: any) => {
      onConfirm(child.props.onComplete(data))
    },
  })
  return (
    <TestModalContent>
      <div>TEST Modal</div>
      <div>{JSON.stringify(data)}</div>
      {attached}
      <button onClick={() => onConfirm(() => {})}>OK</button>
      <button onClick={() => onCancel()}>Cancel</button>
    </TestModalContent>
  )
}

const LandingPage = () => {
  //
  const handleComplete = (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }

    return fullAddress // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }
  //

  const [showModal] = useModal({ recoil: true, reactQuery: true })
  const { login, logout, user } = useAuth()

  const asyncModal = async () => {
    const flag = await showModal(
      <TestModalComponent>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </TestModalComponent>
    )
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

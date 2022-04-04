import React from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'
import QueryBoundary from '@components/Error/QueryBoundary'
import useToast from '@hooks/useToast'
import usePopup from '@hooks/usePopup'
import Test from '@components/Test'

interface HomeProps {}

const StDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Home = ({}: HomeProps) => {
  const { fireToast } = useToast()
  const { openPopup } = usePopup()

  const handleToastFire = () => {
    fireToast('토스트 입니다.', 1500)
  }

  const handleOpenPopup = async () => {
    await openPopup({ render: <div>팝업내용 컴포넌트</div> })
  }

  return (
    <>
      <ThemeSwitch />
      <QueryBoundary loadingFallback={<>loading...</>}>
        <StDiv>{/* <Test /> */}</StDiv>
        <button onClick={handleToastFire}>Fire Toast</button>
        <button onClick={handleOpenPopup}>Open Popup</button>
      </QueryBoundary>
    </>
  )
}

export default Home

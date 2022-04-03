import React from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'
import QueryBoundary from '@components/Error/QueryBoundary'
import useToast from '@hooks/useToast'
import Test from '@components/Test'

interface HomeProps {}

const StDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Home = ({}: HomeProps) => {
  const { fireToast } = useToast()
  const handleBtnClick = () => {
    fireToast('토스트 입니다.', 1500)
  }

  return (
    <>
      <ThemeSwitch />
      <QueryBoundary loadingFallback={<>loading...</>}>
        <StDiv>{/* <Test /> */}</StDiv>
        <button onClick={handleBtnClick}>토스트 실행</button>
      </QueryBoundary>
    </>
  )
}

export default Home

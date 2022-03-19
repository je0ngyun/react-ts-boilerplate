import React from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'

interface HomeProps {}

const StDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
`

const Home = ({}: HomeProps) => {
  return (
    <>
      <ThemeSwitch />
      <StDiv>Home</StDiv>
    </>
  )
}

export default Home

import React from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'
import QueryBoundary from '@components/error/QueryBoundary'

import Test from '@components/Test'

interface HomeProps {}

const StDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Home = ({}: HomeProps) => {
  return (
    <>
      <ThemeSwitch />
      <QueryBoundary>
        <StDiv>
          <Test />
        </StDiv>
      </QueryBoundary>
    </>
  )
}

export default Home

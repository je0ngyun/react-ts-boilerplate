import React from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'
import { useQuery } from 'react-query'
import { api } from '../../api/index'

interface HomeProps {}

const StDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Home = ({}: HomeProps) => {
  const { data } = useQuery('query', () => api.getUserInfo(), {
    suspense: true,
  })
  return (
    <>
      <ThemeSwitch />
      <StDiv>{data.star}</StDiv>
    </>
  )
}

export default Home

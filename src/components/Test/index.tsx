import React from 'react'
import { api } from '../../api/index'
import { useQuery } from 'react-query'

const Test = () => {
  const { data } = useQuery('query', () => api.userService.getUserInfo(), {
    suspense: true,
    staleTime: Infinity,
    retry: false,
  })
  console.log(data)
  return <div>{data?.name}</div>
}
export default Test

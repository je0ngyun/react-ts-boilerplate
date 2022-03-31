import styled from 'styled-components'

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 50px;
  width: 100%;
  padding: 0px 20px;
  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.colors.background_color};
  transition: background-color 0.5s;
`

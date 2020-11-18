import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 55%;
  width: 90%;
  background-color: ${(props) => props.theme.primaryBg};
  border: none;
  border-left: 2.5px solid ${(props) => props.theme.btnCol};
  color: ${(props) => props.theme.primaryColor};
  padding-left: 2%;
  font-size: 16px;
  ::placeholder {
    color: ${(props) => props.theme.primaryColor};
  }
`

function SearchInput() {
  return <Input placeholder="search" />
}

export default SearchInput

import React from 'react'
import styled from 'styled-components'
import { Input } from '../../styled/StyledElements'

const SearchInputStyled = styled(Input)`
  height: 55%;
  width: 90%;
  border-left: 2.5px solid ${(props) => props.theme.btnCol};
  padding-left: 2%;
  font-size: 16px;
`

function SearchInput() {
  return <SearchInputStyled placeholder="search" />
}

export default SearchInput

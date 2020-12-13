import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'
import SearchIcon from './SearchIcon'
import SearchPlace from './SearchInput'

const SearchWrapper = styled.label`
  display: grid;
  grid-column: 2/12;
  grid-template-columns: 40px auto;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.primaryBg};
  @media ${Device.laptop} {
    grid-column: 5/9;
  }
`

function Search() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchPlace />
    </SearchWrapper>
  )
}

export default Search

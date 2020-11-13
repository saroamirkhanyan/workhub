import React from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const SearchWrapper = styled.div`
  display: grid;
  grid-column: 2/12;
  grid-template-columns: auto auto;
  align-content: center;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.secondaryBg};
`

function Search() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <div>ds</div>
    </SearchWrapper>
  )
}

export default Search

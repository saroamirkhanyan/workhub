import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  width: 37px;
  height: 27px;
  background: url(${(props) => props.theme.SearchIcon});
  background-repeat: no-repeat;
`

function SearchIcon() {
  return <Icon />
}

export default SearchIcon

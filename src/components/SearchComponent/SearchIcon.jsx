import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${(props) => props.theme.SearchIcon});
  background-repeat: no-repeat;
  background-size: 100%;
  justify-self: center;
`

function SearchIcon() {
  return <Icon />
}

export default SearchIcon

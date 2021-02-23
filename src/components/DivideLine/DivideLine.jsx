import React from 'react'
import styled from 'styled-components'

const Line = styled.hr`
  grid-column: 1 / 13;
  height: 9px;
  background-color: ${(props) => props.theme.primaryBg};
  border: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`

function DivideLine() {
  return <Line />
}

export default DivideLine

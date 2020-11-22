import React from 'react'
import styled from 'styled-components'

const Line = styled.hr`
  grid-column: 1 / 13;
  height: 9px;
  background-color: ${(props) => props.theme.secondaryBg};
  border: none;
  border-radius: 5px;
`

function DivideLine() {
  return <Line />
}

export default DivideLine

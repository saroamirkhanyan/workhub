import React from 'react'
import styled from 'styled-components'

const Description = styled.h1`
  font-size: 18px;
  padding: 10px;
`

function CardDescription({ children }) {
  return <Description>{children}</Description>
}

export default CardDescription

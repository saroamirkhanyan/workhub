import React from 'react'
import styled from 'styled-components'
const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-size: 50px;
  grid-column: 1 / 13;
  text-align: center;
`
function SignTitle({ children }) {
  return <Title>{children}</Title>
}

export default SignTitle

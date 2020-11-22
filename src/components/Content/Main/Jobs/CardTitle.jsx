import React from 'react'
import styled from 'styled-components'
import { Device } from '../../../../styled/DeviceBreackpoints'

const Title = styled.h1`
  font-weight: 600;
  font-size: 17px;
  padding: 10px;
  border-radius: 15px;
  @media ${Device.mobileM} {
    background-color: ${(props) => props.theme.primaryBg};
  }
`

function CardTitle({ children }) {
  return <Title>{children}</Title>
}

export default CardTitle

import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

const LogoStyled = styled.div`
  grid-column: 2 /4;
  background: url(${(props) => props.theme.LogoMob});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 14vw;
  height: 14vw;
  @media ${Device.mobileS} {
    width: 53px;
    height: 53px;
  }
`

function Logo() {
  return <LogoStyled />
}

export default Logo

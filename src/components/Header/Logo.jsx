import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

const LogoStyled = styled.div`
  grid-column: 2 /4;
  background: url(${(props) => props.theme.LogoMob}), no-repeat;
  background-size: 100%;
  width: 14vw;
  height: 14vw;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${Device.mobileS} {
    width: 53px;
    height: 53px;
    background-repeat: no-repeat;
  }
  @media ${Device.laptop} {
    width: auto;
    grid-column: 2 / 5;
    background: url(${(props) => props.theme.LogoDesk});
    background-repeat: no-repeat;
  }
`

function Logo() {
  return <LogoStyled />
}

export default Logo

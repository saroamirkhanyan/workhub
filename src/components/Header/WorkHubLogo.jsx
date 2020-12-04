import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

const LogoStyled = styled.div`
  grid-column: 2 / 3;
  background: url(${(props) => props.theme.LogoMob}), no-repeat;
  background-size: 100%;
  width: 14vw;
  height: 14vw;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${Device.mobileS} {
    width: 49px;
    height: 49px;
    background-repeat: no-repeat;
  }
  @media ${Device.laptop} {
    height: 100%;
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

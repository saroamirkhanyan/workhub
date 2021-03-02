import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

//remember to change navlink to div version 0.0.2
const LogoWrapper = styled(NavLink)`
  grid-column: 1 / 3;
  background: url(${(props) => props.theme.LogoMob}), no-repeat;
  background-size: 100%;
  width: 42px;
  height: 42px;
  background-repeat: no-repeat;
  background-size: cover;
  justify-self: center;
  @media ${Device.mobileS} {
    width: 53px;
    height: 53px;
    background-repeat: no-repeat;
  }
  @media ${Device.mobileM} {
    height: 57px;
    width: 243px;
    grid-column: 2 / 5;
    background: url(${(props) => props.theme.LogoDesk});
    background-repeat: no-repeat;
  }
`

function Logo() {
  return <LogoWrapper to="/" />
}

export default Logo

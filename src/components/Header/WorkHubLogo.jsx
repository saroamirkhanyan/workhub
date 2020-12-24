import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

const LogoStyled = styled(NavLink)`
  grid-column: 1 / 3;
  background: url(${(props) => props.theme.LogoMob}), no-repeat;
  background-size: 100%;
  width: 42px;
  height: 42px;
  background-repeat: no-repeat;
  background-size: cover;
  justify-self: center;
  @media ${Device.mobileS} {
    width: 49px;
    height: 49px;
    background-repeat: no-repeat;
  }
  @media ${Device.laptop} {
    height: 100%;
    width: 100%;
    grid-column: 2 / 5;
    background: url(${(props) => props.theme.LogoDesk});
    background-repeat: no-repeat;
  }
`

function Logo() {
  return <LogoStyled to="/works" />
}

export default Logo

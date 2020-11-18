import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SignButtons from './SignButtons'
import Switcher from './ThemeSwitch'
const HeaderStyled = styled.header`
  grid-column: 1/13;
  height: 65px;
  background-color: ${(props) => props.theme.primaryBg};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`

function Header(props) {
  return (
    <HeaderStyled>
      <Logo />
      <SignButtons />
      <Switcher {...props} />
    </HeaderStyled>
  )
}

export default Header

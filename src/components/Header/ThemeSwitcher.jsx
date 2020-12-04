import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'

const SwitcherLabel = styled.label`
  display: grid;
  outline: none;
  grid-column: 12/13;
  position: relative;
  border-radius: 9px;
  width: 37px;
  height: 18px;
  background-color: ${(props) => props.theme.btnCol};
  cursor: pointer;
  &:focus {
    user-select: none;
  }
  @media ${Device.mobileS} {
    width: 55px;
    grid-column: 11/13;
  }
`

const SwitcherCircle = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
  transition: all 0.3s ease-in-out;
`

const SwitcherInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  margin-right: auto;
  &:checked + ${SwitcherCircle} {
    justify-self: end;
  }
`
function Switcher({ theme, setTheme }) {
  const swtcherClicked = () => {
    setTheme(theme === 'light' && 'dark')
  }
  return (
    <SwitcherLabel>
      <SwitcherInput onClick={swtcherClicked} type="checkbox" />
      <SwitcherCircle />
    </SwitcherLabel>
  )
}

export default Switcher

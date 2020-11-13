import React from 'react'
import styled from 'styled-components'

const SwitcherLabel = styled.label`
  outline: none;
  grid-column: 11/13;
  position: relative;
  width: 55px;
  height: 18px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.btnCol};
  &:focus {
    user-select: none;
  }
  cursor: pointer;
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
  &:checked + ${SwitcherCircle} {
    transform: translateX(37px);
  }
`
function Switcher({ theme, setTheme }) {
  const swtcherClicked = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <SwitcherLabel>
      <SwitcherInput onClick={swtcherClicked} type="checkbox" />
      <SwitcherCircle />
    </SwitcherLabel>
  )
}

export default Switcher

import React from 'react'
import styled from 'styled-components'

const SwitcherStyled = styled.input`
  grid-column: 11/13;
  width: 60px;
  height: 18px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 55px;
    height: 18px;
    border-radius: 9px;
    background-color: ${(props) => props.theme.BtnCol};
  }
  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }
  &:checked:after {
    transform: translateX(37px);
  }
`
function Switcher({ theme, setTheme }) {
  const swtcherClicked = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return <SwitcherStyled type="checkbox" onClick={swtcherClicked} />
}

export default Switcher

import React from 'react'
import styled from 'styled-components'

<<<<<<< HEAD
const SwitcherLabel = styled.label`
  outline: none;
  grid-column: 11/13;
  position: relative;
  width: 55px;
  height: 18px;
  border-radius: 9px;
  background-color: ${(props) => props.theme.BtnCol};
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
=======
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
>>>>>>> c473126d92c437112d94304c8f1b3603f6c50b50
    transform: translateX(37px);
  }
`
function Switcher({ theme, setTheme }) {
  const swtcherClicked = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

<<<<<<< HEAD
  return (
    <SwitcherLabel>
      <SwitcherInput onClick={swtcherClicked} type="checkbox" />
      <SwitcherCircle />
    </SwitcherLabel>
  )
=======
  return <SwitcherStyled type="checkbox" onClick={swtcherClicked} />
>>>>>>> c473126d92c437112d94304c8f1b3603f6c50b50
}

export default Switcher

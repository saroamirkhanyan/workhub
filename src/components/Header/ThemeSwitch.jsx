import React from 'react'
import styled from 'styled-components'

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
    transform: translateX(37px);
  }
`
function Switcher({ currentTheme, setTheme }) {
  const swtcherClicked = () => {
    // current theme i hamar
    const theme = currentTheme === 'light' ? 'dark' : 'light'
    //es masy durs chi galis
    //true false karelier anel
    // nayi ete 3 hat theme unenaq tvyal depqum es algorithmy chi ashxati
    //es gazaraguyn guynic het chem kaynelu tra hamar senc areci es 3 hat theme em planavore
    //haa parza ba et deqpum arden switcheri tvyal tarberiaky chi ogni petqa arden voch te
    // checkbox ogtagorces ayl select u et inch vor yntrum a usery ete el dnes spasi cucyc ta
    setTheme(theme)
  }
  //aveli lav anun kareli a mtacel inch kareli a anuny dnel?
  //indz tvuma senc aveli lava inch kases?
  //esim
  //meka menq setTheme funkcian kanchelu kam karanq senc anneq
  // theme === 'light' ? setTheme('dark') : setTheme('light')
  // Switch.js y etqan el lav anun chi orinak vor es aranc haskanalu nayeyi cheyi haskana ira imsty
  //mekel stex
  //indz tvuma ThemeSwtich.js aveli lava okay
  return (
    <SwitcherLabel>
      <SwitcherInput onClick={swtcherClicked} type="checkbox" />
      <SwitcherCircle />
    </SwitcherLabel>
  )
}

export default Switcher

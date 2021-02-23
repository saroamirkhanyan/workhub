import { NavLink } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

export const Button = styled.button`
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.btnCol};
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  padding: ${(props) => props.padY}px ${(props) => props.padX}px;
  ${(props) =>
    props.size &&
    css`
      font-size: ${(props) => props.size};
    `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: wrap;
  ${(props) =>
    props.gap &&
    css`
      row-gap: ${(props) => props.gap}px;
    `}
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.primaryBg};
  border: none;
  color: ${(props) => props.theme.primaryColor};
  ::placeholder {
    color: ${(props) => props.theme.primaryColor};
  }
`
export const Text = styled.p`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.theme.primaryColor};
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

export const Label = styled.label`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.theme.primaryColor};
`
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`

//loader animation
const load = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

export const Loader = styled.div`
  border-radius: 50%;
  color: ${(props) => props.theme.primaryBg};
  box-shadow: inset 0 0 0 0.8em;
  position: absolute;
  top: 35%;
  left: calc(50% - 4em);
  width: 8em;
  height: 8em;
  transform: translateZ(0);
  :before,
  :after {
    border-radius: 50%;
    position: absolute;
    content: '';
    box-sizing: border-box;
    top: -0.1em;
    left: -0.1em;
    width: 8.2em;
    height: 8.2em;
    border: 1em solid ${(props) => props.theme.containerBg};
    border-color: ${(props) => props.theme.containerBg} transparent transparent
      transparent;
  }
  :before {
    animation: ${load} 2s cubic-bezier(0.63, 0.83, 0.64, 0.83) infinite;
  }
  :after {
    animation: ${load} 2s cubic-bezier(0.15, 0.56, 0.27, 0.72) infinite;
  }
  //its small loader
  ${(props) =>
    props.small &&
    css`
      position: relative;
      justify-self: center;
      left: 0;
      width: 4em;
      height: 4em;
      box-shadow: inset 0 0 0 0.7em;
      :before,
      :after {
        width: 4.2em;
        height: 4.2em;
        border: 1em solid ${props.theme.containerBg};
        border-color: ${props.theme.containerBg} transparent transparent
          transparent;
      }
    `}
`

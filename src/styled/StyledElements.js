import { NavLink } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
`
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`

const load = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

// PagesLoader for pages change. in suspense
export const PagesLoader = styled.div`
  border-radius: 50%;
  color: ${(props) => props.theme.primaryBg};
  position: absolute;
  top: 35%;
  left: calc(50% - 4em);
  width: 8em;
  height: 8em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  :before,
  :after {
    border-radius: 50%;
    position: absolute;
    content: '';
  }
  :before {
    width: 4.2em;
    height: 8.2em;
    background: ${(props) => props.theme.containerBg};
    border-radius: 8.2em 0 0 8.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 4.1em 4.1em;
    animation: load 2s infinite ease 1.5s;
  }
  :after {
    width: 4.2em;
    height: 8.2em;
    background: ${(props) => props.theme.containerBg};
    border-radius: 0 8.2em 8.2em 0;
    top: -0.1em;
    left: 3.9em;
    transform-origin: 0.1em 4.1em;
    animation: ${load} 2s infinite ease;
  }
`

//Loader for load Data

export const DataLoader = styled.div`
  margin-top: 10px;
  border-radius: 50%;
  color: ${(props) => props.theme.primaryBg};
  position: relative;
  justify-self: center;
  width: 4em;
  height: 4em;
  box-shadow: inset 0 0 0 0.7em;
  transform: translateZ(0);
  :before,
  :after {
    border-radius: 50%;
    position: absolute;
    content: '';
  }
  :before {
    width: 2.2em;
    height: 4.2em;
    background: ${(props) => props.theme.containerBg};
    border-radius: 4.2em 0 0 4.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 2.1em 2.1em;
    animation: ${load} 2s infinite ease 1.5s;
  }
  :after {
    width: 2.2em;
    height: 4.2em;
    background: ${(props) => props.theme.containerBg};
    border-radius: 0 4.2em 4.2em 0;
    top: -0.1em;
    left: 1.9em;
    transform-origin: 0.1em 2.1em;
    animation: ${load} 2s infinite ease;
  }
`

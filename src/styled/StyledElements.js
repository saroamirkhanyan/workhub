import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

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
  ${(props) =>
    props.align &&
    css`
      text-align: ${(props) => props.align};
    `}
`
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`

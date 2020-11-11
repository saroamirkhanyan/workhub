import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.BtnCol};
  color: ${(props) => props.theme.primaryColor};
`

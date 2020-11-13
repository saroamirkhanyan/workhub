import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  height: 34px;
  outline: none;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.btnCol};
  color: ${(props) => props.theme.primaryColor};
  font-size: 18px;
`

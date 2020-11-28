import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.btnCol};
  color: ${(props) => props.theme.primaryColor};
  font-size: 17px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: wrap;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.primaryBg};
  border: none;
  color: ${(props) => props.theme.primaryColor};
  ::placeholder {
    color: ${(props) => props.theme.primaryColor};
  }
`

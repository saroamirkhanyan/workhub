import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'
import { Input, Label, Wrapper, Button } from '../../styled/StyledElements'

// grid dont work well
// change StyledButton props
const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
  grid-column: 2 / 12;
  background-color: ${(props) => props.theme.primaryBg};
  border-radius: 20px;
  padding: 20px;
  @media ${Device.mobileM} {
    grid-column: 4/10;
  }
  @media ${Device.laptop} {
    grid-column: 5/9;
  }
`
const SignInput = styled(Input)`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.btnCol};
  border-radius: 18px;
  font-size: 18px;
  padding: 0 10px;
`
const SignFormBtn = styled(Button)`
  border-radius: 20px;
  width: 75%;
`

function SignForm() {
  return (
    <FormWrapper justify="center" align="center" gap="20" wrap="wrap">
      <Label size="20">
        <p>Email</p> <SignInput />
      </Label>

      <Label size="20">
        <p>
          Login <SignInput />
        </p>
      </Label>

      <Label size="20">
        <p>
          Password <SignInput />
        </p>
      </Label>
      <SignFormBtn size="25px" padY="5" padX="0">
         շարունակել
      </SignFormBtn>
    </FormWrapper>
  )
}

export default SignForm

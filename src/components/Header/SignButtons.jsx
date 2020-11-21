import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'
import { Button } from '../../styled/StyledElements'

const SignButtonsWrapper = styled.div`
  grid-column: 4/7;
  display: flex;
  justify-content: space-between;
  width: 150px;
  @media ${Device.mobileS} {
    grid-column: 7/11;
    justify-self: end;
    justify-content: space-around;
    width: 250px;
  }
`

const SignButton = styled(Button)`
  width: 70px;
  height: 32px;
  font-weight: 600;
  @media ${Device.mobileS} {
    width: 100px;
  }
`

function SignButtons() {
  return (
    <SignButtonsWrapper>
      <SignButton>Sign in</SignButton>
      <SignButton>Log in</SignButton>
    </SignButtonsWrapper>
  )
}

export default SignButtons

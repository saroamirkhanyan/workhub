import React from 'react'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'
import { Button, Wrapper } from '../../styled/StyledElements'

const SignButtonsWrapper = styled(Wrapper)`
  grid-column: 3/11;
  @media ${Device.mobileS} {
    grid-column: 7/11;
    justify-self: end;
    justify-content: space-around;
    width: 270px;
  }
`

const SignButton = styled(Button)`
  font-size: 15px;
`

function SignButtons() {
  return (
    <SignButtonsWrapper justify="space-around" align="center">
      <SignButton padY="7" padX="10" size="4vw">
        Գրանցվել
      </SignButton>
      <SignButton padY="7" padX="10" size="4vw">
        մուտք գործել
      </SignButton>
    </SignButtonsWrapper>
  )
}

export default SignButtons

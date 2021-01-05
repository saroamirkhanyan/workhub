import React from 'react'
import { NavLinkStyled } from '../../styled/StyledElements'
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
  @media ${Device.mobileS} {
    font-size: 17px;
  }
`

function SignButtons() {
  return (
    <SignButtonsWrapper justify="space-around" align="center">
      <NavLinkStyled to="/signup">
        <SignButton padY="7" padX="10" size="4vw">
          Գրանցվել
        </SignButton>
      </NavLinkStyled>

      <NavLinkStyled to="/signin">
        <SignButton padY="7" padX="10" size="4vw">
          մուտք գործել version 2
        </SignButton>
      </NavLinkStyled>
    </SignButtonsWrapper>
  )
}

export default SignButtons

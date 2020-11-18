import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled/StyledElements'

const SignButtonsWrapper = styled.div`
  grid-column: 4/7;
  display: flex;
  justify-content: space-between;
  width: 170px;
`

const ButtonSignIn = styled(Button)`
  width: 80px;
  height: 34px;
  font-weight: 600;
`
const ButtonLogIn = styled(Button)`
  width: 80px;
  height: 34px;
  font-weight: 600;
`

function SignButtons() {
  return (
    <SignButtonsWrapper>
      <ButtonSignIn>Sign in</ButtonSignIn>
      <ButtonLogIn>Log in</ButtonLogIn>
    </SignButtonsWrapper>
  )
}

export default SignButtons

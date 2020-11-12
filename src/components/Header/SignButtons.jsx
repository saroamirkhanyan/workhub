import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD

import { Button } from '../../styled/StyledElements'
=======
import { Button } from '../../styled/styledElements/StyledElements'
>>>>>>> c473126d92c437112d94304c8f1b3603f6c50b50

const ButtonSignIn = styled(Button)`
  grid-column: 4/7;
`
const ButtonLogIn = styled(Button)`
  grid-column: 7/10;
`

function SignButtons() {
  return (
    <>
      <ButtonSignIn>Sign in</ButtonSignIn>
      <ButtonLogIn>Log in</ButtonLogIn>
    </>
  )
}

export default SignButtons

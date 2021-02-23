import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../styled/StyledElements'

const FormWrapper = styled(Wrapper)`
  grid-column: 4 / 9;
  background-color: ${(props) => props.theme.bgColor};
`

function SignForm() {
  return <FormWrapper justify="center" align="center" gap="20">
    
  </FormWrapper>
}

export default SignForm

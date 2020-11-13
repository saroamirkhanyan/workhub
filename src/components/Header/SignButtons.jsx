import React from "react";
import styled from "styled-components";
import { Button } from "../../styled/StyledElements";

const ButtonSignIn = styled(Button)`
    grid-column: 4/7;
`;
const ButtonLogIn = styled(Button)`
    grid-column: 7/10;
`;

function SignButtons() {
    return (
        <>
            <ButtonSignIn>Sign in</ButtonSignIn>
            <ButtonLogIn>Log in</ButtonLogIn>
        </>
    );
}

export default SignButtons;

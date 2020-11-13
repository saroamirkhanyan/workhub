import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
    grid-column: 2 /4;
    width: 53px;
    height: 53px;
    background: url(${(props) => props.theme.logoMob});
    background-size: 100%;
    background-repeat: no-repeat;
`;

function Logo() {
    return <LogoStyled />;
}

export default Logo;

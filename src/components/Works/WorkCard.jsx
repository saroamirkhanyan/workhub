import React from "react";
import styled from "styled-components";
import { Button, Text, Wrapper } from "../../styled/StyledElements";
import CardDescription from "./CardDescription";

const WorkCardStyled = styled.section`
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.primaryColor};
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

function WorkCard({ hashtags, price, description }) {
    return (
        <WorkCardStyled>
            <CardDescription>{description}</CardDescription>
            <Wrapper justify="space-between" align="center" gap="15">
                <Text size="15">
                    {hashtags.map((hashtag) => "#" + hashtag).join(" ")}
                </Text>
                <Button padY="5" padX="15" size="20px">
                    {price}
                </Button>
            </Wrapper>
        </WorkCardStyled>
    );
}

export default WorkCard;

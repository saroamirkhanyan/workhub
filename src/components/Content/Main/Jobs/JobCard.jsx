import React from "react";
import styled from "styled-components";
import { Button, Wrapper } from "../../../../styled/StyledElements";
import CardDescription from "./CardDescription";

const JobCardStyled = styled.section`
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.primaryColor};
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    row-gap: 10px;
`;

const CardButton = styled(Button)`
    padding: 5px 10px;
`;

const CardWrapper = styled(Wrapper)`
    row-gap: 15px;
`;

const CardHashtegs = styled.p`
    font-size: 15px;
`;

function JobCard({ hashtags, price, description }) {
    console.log(hashtags);
    return (
        <JobCardStyled>
            <CardDescription>{description}</CardDescription>
            <CardWrapper justify="space-between" align="center">
                <CardHashtegs>
                    {hashtags.map((hashtag) => "#" + hashtag).join(" ")}
                </CardHashtegs>
                <CardButton>{price}</CardButton>
            </CardWrapper>
        </JobCardStyled>
    );
}

export default JobCard;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { LoadCardsThunk } from "../../../../redux/jobCard-reducer";
import { Device } from "../../../../styled/DeviceBreackpoints";
import JobCard from "./JobCard";

const Main = styled.main`
    display: grid;
    grid-column: 2 / 12;
    @media ${Device.laptop} {
        grid-column: 3 / 11;
    }
`;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-bottom: 20px;
`;

const Jobs = React.memo(() => {
    const JobCards = useSelector((state) => state.JobCards.cards);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const scrollListener = () => {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.scrollY + window.innerHeight;

            if (documentHeight === windowHeight) {
                setPage(page + 1);
                console.log(page, documentHeight, windowHeight);
            }
        };

        document.addEventListener("scroll", scrollListener);

        dispatch(
            LoadCardsThunk({
                page,
                count: 5,
            })
        );
        return () => {
            console.log("unmount");
            document.removeEventListener("scroll", scrollListener);
        };
    }, [dispatch, page]);

    console.log(JobCards);

    const Cards = JobCards.map((cards) => (
        <JobCard key={cards._id} {...cards} />
    ));

    return (
        <Main>
            <Article>{Cards}</Article>
        </Main>
    );
});

export default Jobs;

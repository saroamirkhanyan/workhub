import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { LoadCardsThunk } from '../../redux/jobCard-reducer'
import { Device } from '../../styled/DeviceBreackpoints'
import { Text } from '../../styled/StyledElements'
import JobCard from './JobCard'

const Main = styled.main`
  display: grid;
  grid-column: 2 / 12;
  @media ${Device.laptop} {
    grid-column: 3 / 11;
  }
  padding-bottom: 40px;
`
const Article = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

const Jobs = React.memo(() => {
  const JobCards = useSelector((state) => state.JobCards.cards)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  const isCardsLoaded = useSelector((state) => state.JobCards.isCardsLoaded)

  const scrollListener = useCallback(() => {
    const JobCardsLength = JobCard.length + 1
    const scrollTop = window.pageYOffset
    const documentHeight = document.body.scrollHeight
    const windowHeight = window.innerHeight

    if (scrollTop + windowHeight >= documentHeight) {
      if (JobCardsLength === page * JobCardsLength) {
        console.log(JobCardsLength, page * JobCardsLength)
        setPage(page + 1)
      }
    }
  }, [page])

  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)

    const countOfPages = Math.round(document.documentElement.clientHeight / 150)
    dispatch(
      LoadCardsThunk({
        page,
        count: countOfPages,
      })
    )

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
    }
  }, [dispatch, page, scrollListener])

  console.log(JobCards, isCardsLoaded)

  const Cards = JobCards.map((cards) => <JobCard key={cards._id} {...cards} />)

  const Loader = isCardsLoaded && <Text size="30">Ներբեռնում</Text>
  return (
    <Main>
      <Article>{Cards}</Article>
      {Loader}
    </Main>
  )
})

export default Jobs

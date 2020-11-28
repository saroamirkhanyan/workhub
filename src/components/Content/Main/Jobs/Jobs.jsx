import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { LoadCardsThunk } from '../../../../redux/jobCard-reducer'
import { Device } from '../../../../styled/DeviceBreackpoints'
import JobCard from './JobCard'

const Main = styled.main`
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: repeat(12, 1fr);
`
const Article = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 12;
  grid-row-gap: 30px;
  @media ${Device.laptop} {
    grid-column: 3 / 11;
  }
`

const Jobs = React.memo(() => {
  const JobCards = useSelector((state) => state.JobCards.cards)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  window.addEventListener('scroll', () => {
    if (
      document.documentElement.scrollHeight - window.scrollY ===
      window.innerHeight
    ) {
      setPage(page + 1)
      console.log(page)
    }
  })
  useEffect(() => {
    dispatch(
      LoadCardsThunk({
        page,
        count: 5,
      })
    )
  }, [dispatch, page])
  console.log(JobCards)

  const Cards = JobCards.map((cards) => <JobCard key={cards._id} {...cards} />)

  return (
    <Main>
      <Article>{Cards}</Article>
    </Main>
  )
})

export default Jobs

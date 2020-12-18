import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { LoadCardsThunk } from '../../redux/WorkCard-reducer'
import { Device } from '../../styled/DeviceBreackpoints'
import { Text } from '../../styled/StyledElements'
import WorkCard from './WorkCard'

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

const Works = React.memo(() => {
  const WorkCards = useSelector((state) => state.WorkCards.cards)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const isCardsLoaded = useSelector((state) => state.WorkCards.isCardsLoaded)
  const isCardsFinished = useSelector(
    (state) => state.WorkCards.isCardsFinished
  )
  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.pageYOffset
      const documentHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight

      if (scrollTop + windowHeight >= documentHeight && !isCardsLoaded) {
        setPage(page + 1)
      }
    }
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
    }
  }, [dispatch, page, isCardsLoaded])

  useEffect(() => {
    const countOfPages = Math.round(window.innerHeight / 150)
    console.log(isCardsFinished)

    if (!isCardsFinished) {
      dispatch(
        LoadCardsThunk({
          page,
          count: countOfPages,
        })
      )
    }
  }, [dispatch, page, isCardsFinished])

  const Cards = WorkCards.map((cards) => (
    <WorkCard key={cards._id} {...cards} />
  ))

  const Loader = isCardsLoaded && !isCardsFinished && (
    <Text size="30">Ներբեռնում</Text>
  )
  return (
    <Main>
      <Article>{Cards}</Article>
      {Loader}
    </Main>
  )
})

export default Works

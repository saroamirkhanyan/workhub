import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  AddPageAction,
  isFirstRenderAction,
  LoadCardsThunk,
} from '../../redux/WorkCard-reducer'
import { Device } from '../../styled/DeviceBreackpoints'
import { Loader } from '../../styled/StyledElements'
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
  const dispatch = useDispatch()
  const WorkCards = useSelector((state) => state.WorkCards.cards)
  const page = useSelector((state) => state.WorkCards.page)
  const isCardsLoaded = useSelector((state) => state.WorkCards.isCardsLoaded)
  const isFirstRender = useSelector((state) => state.WorkCards.isFirstRender)
  const isCardsFinished = useSelector(
    (state) => state.WorkCards.isCardsFinished
  )
  const [isInEnd, setIsInEnd] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.pageYOffset
      const documentHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight

      if (
        scrollTop + windowHeight >= documentHeight &&
        !isCardsLoaded &&
        !isCardsFinished
      ) {
        setIsInEnd(true)
      }
    }
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
    }
  }, [dispatch, isCardsLoaded, isCardsFinished])

  useEffect(() => {
    const countOfPages = Math.round(window.innerHeight / 150)
    console.log(isInEnd, isFirstRender)

    if (!isCardsLoaded && (isInEnd || isFirstRender)) {
      dispatch(
        LoadCardsThunk({
          page,
          count: countOfPages,
        })
      )
      if (isFirstRender) dispatch(isFirstRenderAction())
      dispatch(AddPageAction())
      setIsInEnd(false)
    }
  }, [dispatch, page, isCardsLoaded, isInEnd, isFirstRender])

  const Cards = WorkCards.map((cards) => (
    <WorkCard key={cards._id} {...cards} />
  ))

  return (
    <Main>
      <Article>{Cards}</Article>
      {isCardsLoaded && !isCardsFinished && <Loader small />}
    </Main>
  )
})

export default Works

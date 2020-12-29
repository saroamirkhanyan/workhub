import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
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
  const workCards = useSelector((state) => state.WorkCards)

  const [isInEnd, setIsInEnd] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.pageYOffset
      const documentHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight
      console.log(workCards.isCardsLoaded)

      if (
        scrollTop + windowHeight >= documentHeight &&
        !workCards.isCardsLoaded &&
        workCards.hasNextPage
      ) {
        console.log(workCards.isCardsLoaded)
        setIsInEnd(true)
      }
    }
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
    }
  }, [dispatch, workCards.isCardsLoaded, workCards.hasNextPage])

  useEffect(() => {
    const limit = Math.round(window.innerHeight / 150)

    if (!workCards.isCardsLoaded && (isInEnd || workCards.isFirstRender)) {
      dispatch(
        LoadCardsThunk({
          page: workCards.nextPage,
          limit,
        })
      )
      if (workCards.isFirstRender) dispatch(isFirstRenderAction())
      setIsInEnd(false)
    }
  }, [
    dispatch,
    workCards.nextPage,
    workCards.isCardsLoaded,
    isInEnd,
    workCards.isFirstRender,
    workCards.page,
  ])

  const Cards = workCards.docs.map((cards) => (
    <WorkCard key={cards._id} {...cards} />
  ))

  return (
    <Main>
      <Article>{Cards}</Article>
      {workCards.isCardsLoaded && !workCards.isCardsFinished && (
        <Loader small />
      )}
    </Main>
  )
})

export default Works

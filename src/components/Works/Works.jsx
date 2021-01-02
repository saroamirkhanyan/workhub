import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RESET_CARDS, LoadCardsAction } from '../../redux/WorkCard-reducer'
import { Device } from '../../styled/DeviceBreackpoints'
import { Loader } from '../../styled/StyledElements'
import LoadCardsInEnd from './ListenersForLoadCards/LoadCardsInEnd'
import ScrollListener from './ListenersForLoadCards/ScrollListener'
import UrlWathcer from './ListenersForLoadCards/UrlWatcher'
import WorkCard from './WorkCard'
import IsExistWork from './IsExistWork'
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
  const workCards = useSelector((state) => state.WorkCards)
  const [isInEnd, setIsInEnd] = useState(false)
  const dispatch = useDispatch()
  //if scroll in end setIsInEnd( true ) and then LoadCardsIsInEnd will start
  ScrollListener({ isInEnd, setIsInEnd })
  LoadCardsInEnd({ isInEnd, setIsInEnd })

  //watch the url and when url change it load Cards
  //"wonderful English"
  UrlWathcer()

  useEffect(() => {
    return () => {
      dispatch(LoadCardsAction({ docs: [] }, RESET_CARDS))
    }
  }, [dispatch])
  const Cards = workCards.cards.map((cards) => (
    <WorkCard key={cards._id} {...cards} />
  ))

  return (
    <Main>
      <Article>{Cards}</Article>
      {workCards.IsCardsLoadedAction && !workCards.isCardsFinished && (
        <Loader small />
      )}
      <IsExistWork />
    </Main>
  )
})

export default Works

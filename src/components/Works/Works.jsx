import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Device } from '../../styled/DeviceBreackpoints'
import { Loader } from '../../styled/StyledElements'
import LoadCardsInEnd from './ListenersForLoadCards/LoadCardsInEnd'
import ScrollListener from './ListenersForLoadCards/ScrollListener'
import UrlWathcer from './ListenersForLoadCards/UrlWatcher'
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
  const workCards = useSelector((state) => state.WorkCards)
  const [isInEnd, setIsInEnd] = useState(false)

  //if scroll in end setIsInEnd( true ) and then LoadCardsIsInEnd will start
  ScrollListener({ isInEnd, setIsInEnd })
  LoadCardsInEnd({ isInEnd, setIsInEnd })

  //watch the url and when url change it load data "wonderful English"
  UrlWathcer()

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

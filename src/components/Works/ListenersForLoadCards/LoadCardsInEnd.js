import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  LoadOrResetSearchCards,
  LOAD_CARDS,
} from '../../../redux/WorkCard-reducer'
import GetSearchQueryParam from './GetSearchQueryParam'
function LoadCardsInEnd({ isInPageEnd, setIsInPageEnd }) {
  const dispatch = useDispatch()
  const workCards = useSelector((state) => state.WorkCards)
  const searchQuery = GetSearchQueryParam()

  useEffect(() => {
    if (isInPageEnd) {
      const limit = Math.round(window.innerHeight / 150)

      dispatch(
        LoadOrResetSearchCards(
          {
            searchQuery,
            page: workCards.nextPage,
            limit,
          },
          LOAD_CARDS
        )
      )
      setIsInPageEnd(false)
    }
  }, [
    dispatch,
    workCards.nextPage,
    workCards.IsCardsLoaded,
    isInPageEnd,
    workCards.isFirstRender,
    workCards.page,
    setIsInPageEnd,
    searchQuery,
  ])
}

export default LoadCardsInEnd

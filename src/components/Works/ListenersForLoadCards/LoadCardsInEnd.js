import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  LoadOrResetSearchCards,
  LOAD_CARDS,
} from '../../../redux/WorkCard-reducer'
import GetSearchQueryParam from './GetSearchQueryParam'
function LoadCardsInEnd({ isInEnd, setIsInEnd }) {
  const dispatch = useDispatch()
  const workCards = useSelector((state) => state.WorkCards)
  const searchQuery = GetSearchQueryParam()

  useEffect(() => {
    if (!workCards.IsCardsLoadedAction && isInEnd) {
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
      setIsInEnd(false)
    }
  }, [
    dispatch,
    workCards.nextPage,
    workCards.IsCardsLoadedAction,
    isInEnd,
    workCards.isFirstRender,
    workCards.page,
    setIsInEnd,
    searchQuery,
  ])
}

export default LoadCardsInEnd

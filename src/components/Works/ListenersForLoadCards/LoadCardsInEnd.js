import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LoadCardsThunk } from '../../../redux/WorkCard-reducer'
import { useParams } from 'react-router-dom'
function LoadCardsInEnd({ isInEnd, setIsInEnd }) {
  const dispatch = useDispatch()
  const workCards = useSelector((state) => state.WorkCards)
  const { searchQuery } = useParams()
  useEffect(() => {
    if (!workCards.isCardsLoaded && isInEnd) {
      console.log('Load cards')
      const limit = Math.round(window.innerHeight / 150)
      dispatch(
        LoadCardsThunk({
          searchQuery,
          page: workCards.nextPage,
          limit,
        })
      )
      setIsInEnd(false)
    }
  }, [
    dispatch,
    workCards.nextPage,
    workCards.isCardsLoaded,
    isInEnd,
    workCards.isFirstRender,
    workCards.page,
    setIsInEnd,
    searchQuery,
  ])
}

export default LoadCardsInEnd

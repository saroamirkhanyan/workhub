import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoadCardsThunk } from '../../../redux/WorkCard-reducer'
import { isFirstRenderAction } from '../../../redux/WorkCard-reducer'

function UrlWathcer() {
  const { searchQuery } = useParams()
  const dispatch = useDispatch()
  const isFirstRender = useSelector((state) => state.WorkCards.isFirstRender)

  useEffect(() => {
    if (true) {
      const limit = Math.round(window.innerHeight / 150)
      dispatch(LoadCardsThunk({ searchQuery, page: 1, limit }))
      dispatch(isFirstRenderAction())
    }
  }, [dispatch, searchQuery, isFirstRender])
}

export default UrlWathcer

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  LoadOrResetSearchCards,
  RESET_CARDS,
  DoesNotExistAction,
} from '../../../redux/WorkCard-reducer'
import GetSearchQueryParam from './GetSearchQueryParam'

function UrlWathcer() {
  const searchQuery = GetSearchQueryParam()
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchQuery !== '') {
      const limit = Math.round(window.innerHeight / 150)
      dispatch(
        LoadOrResetSearchCards({ searchQuery, page: 1, limit }, RESET_CARDS)
      )
    } else {
      dispatch(DoesNotExistAction(false))
    }
  }, [dispatch, searchQuery])
}

export default UrlWathcer

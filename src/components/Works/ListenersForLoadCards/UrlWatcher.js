import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ResetSearchCards } from '../../../redux/WorkCard-reducer'
// import { isFirstRenderAction } from '../../../redux/WorkCard-reducer'

function UrlWathcer() {
  const { searchQuery } = useParams()
  const dispatch = useDispatch()
  // const isFirstRender = useSelector((state) => state.WorkCards.isFirstRender)

  useEffect(() => {
    if (true) {
      console.log('urlChange')
      const limit = Math.round(window.innerHeight / 150)
      dispatch(ResetSearchCards({ searchQuery, page: 1, limit }))
      // dispatch(isFirstRenderAction())
    }
  }, [dispatch, searchQuery])
}

export default UrlWathcer

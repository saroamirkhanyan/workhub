import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function ScrollListener({ isInPageEnd, setIsInPageEnd }) {
  const dispatch = useDispatch()
  const workCards = useSelector((state) => state.WorkCards)

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.pageYOffset
      const documentHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight

      if (scrollTop + windowHeight >= documentHeight) {
        setIsInPageEnd(true)
      }
    }
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
    }
  }, [dispatch, workCards.IsCardsLoaded, workCards.hasNextPage, setIsInPageEnd])
}

export default ScrollListener

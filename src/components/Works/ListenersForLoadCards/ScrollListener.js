import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function ScrollListener({ isInPageEnd, setIsInPageEnd }) {
  const dispatch = useDispatch()
  const workCards = useSelector((state) => state.WorkCards)

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = document.documentElement.scrollTop
      const documentHeight = document.documentElement.offsetHeight
      const windowHeight = window.innerHeight

      if (
        windowHeight + scrollTop === documentHeight &&
        !workCards.IsCardsLoadedAction &&
        workCards.hasNextPage
      ) {
        setIsInPageEnd(true)
      }
    }
    document.addEventListener('scroll', scrollListener)
    document.addEventListener('touchmove', scrollListener)
    document.addEventListener('touchstart', scrollListener)
    document.addEventListener('touchend', scrollListener)
    document.addEventListener('mousedown', scrollListener)
    document.addEventListener('mousemove', scrollListener)
    document.addEventListener('mouseup', scrollListener)

    return () => {
      document.removeEventListener('scroll', scrollListener)
      document.removeEventListener('touchmove', scrollListener)
      document.removeEventListener('touchstart', scrollListener)
      document.removeEventListener('touchend', scrollListener)
      document.removeEventListener('mousedown', scrollListener)
      document.removeEventListener('mousemove', scrollListener)
      document.removeEventListener('mouseup', scrollListener)
    }
  }, [
    dispatch,
    workCards.IsCardsLoadedAction,
    workCards.hasNextPage,
    setIsInPageEnd,
  ])
}

export default ScrollListener

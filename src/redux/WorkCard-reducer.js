import { LoadCards } from '../api/api'

const ADD_CARD = 'WorkCard-reducer/ADD_CARD'
const IS_CARDS_LOADED = 'WorkCard-reducer/IS_CARDS_LOADED'
const IS_CARDS_FINISHED = 'WorkCard-reducer/IS_CARDS_FINISHED'

const InitalState = {
  cards: [],
  isCardsLoaded: false,
  isCardsFinished: false,
}
const WorkCardReducer = (state = InitalState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        cards: [...state.cards, ...action.cards],
      }
    }
    case IS_CARDS_LOADED: {
      return {
        ...state,
        isCardsLoaded: action.isLoaded,
      }
    }
    case IS_CARDS_FINISHED: {
      return {
        ...state,
        isCardsFinished: action.isFinished,
      }
    }

    default: {
      return { ...state }
    }
  }
}

const LoadCardsAction = (cards) => ({ type: ADD_CARD, cards })
export const IsCardsFetching = (isLoaded) => ({
  type: IS_CARDS_LOADED,
  isLoaded,
})
const IsCardsFinishedAction = (isFinished) => ({
  type: IS_CARDS_FINISHED,
  isFinished,
})

export const LoadCardsThunk = (count, page) => async (dispatch) => {
  dispatch(IsCardsFetching(true))
  const response = await LoadCards.load(count, page)
  dispatch(LoadCardsAction(response))
  dispatch(IsCardsFetching(false))
  const IsFinished = response.length < 1
  dispatch(IsCardsFinishedAction(IsFinished))
}

export default WorkCardReducer

import { LoadCards } from '../api/api'

const ADD_CARD = 'jobCard-reducer/ADD_CARD'
const IS_CARDS_LOADED = 'jobCard-reducer/IS_CARDS_LOADED'
const InitalState = {
  cards: [],
  isCardsLoaded: null,
}
const JobCardReducer = (state = InitalState, action) => {
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
    default: {
      return { ...state }
    }
  }
}

const LoadCardsAction = (cards) => ({ type: ADD_CARD, cards })
const IsCardsLoadedAction = (isLoaded) => ({ type: IS_CARDS_LOADED, isLoaded })

export const LoadCardsThunk = (count, page) => async (dispatch) => {
  dispatch(IsCardsLoadedAction(true))
  const response = await LoadCards.load(count, page)
  dispatch(IsCardsLoadedAction(false))
  dispatch(LoadCardsAction(response))
}

export default JobCardReducer

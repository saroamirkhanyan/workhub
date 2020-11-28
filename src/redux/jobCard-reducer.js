import { LoadCards } from '../api/api'

const ADD_CARD = 'jobCard-reducer/ADD_CARD'

const InitalState = {
  cards: [],
}
const JobCardReducer = (state = InitalState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        cards: [...state.cards, ...action.cards],
      }
    }
    default: {
      return { ...state }
    }
  }
}

const LoadCardsAction = (cards) => ({ type: ADD_CARD, cards })

//remember async/await
export const LoadCardsThunk = (count, page) => (dispatch) => {
  LoadCards.load(count, page).then((response) => {
    dispatch(LoadCardsAction(response))
  })
}

export default JobCardReducer

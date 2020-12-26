import { LoadCards } from '../api/api'

const ADD_CARD = 'WorkCard-reducer/ADD_CARD'
const IS_CARDS_LOADED = 'WorkCard-reducer/IS_CARDS_LOADED'
const IS_CARDS_FINISHED = 'WorkCard-reducer/IS_CARDS_FINISHED'
const ADD_PAGE_NUMBER = 'ADD_PAGE_NUMBER'
const IS_FIRST_RENDER = 'IS_FIRST_RENDER'
const InitalState = {
  cards: [],
  page: 1,
  isCardsLoaded: false,
  isCardsFinished: false,
  isFirstRender: true,
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
    case ADD_PAGE_NUMBER: {
      return {
        ...state,
        page: state.page + 1,
      }
    }
    case IS_FIRST_RENDER: {
      return {
        ...state,
        isFirstRender: false,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export const AddPageAction = () => ({ type: ADD_PAGE_NUMBER })
export const isFirstRenderAction = () => ({ type: IS_FIRST_RENDER })

export const IsCardsFetching = (isLoaded) => ({
  type: IS_CARDS_LOADED,
  isLoaded,
})
const IsCardsFinishedAction = (isFinished) => ({
  type: IS_CARDS_FINISHED,
  isFinished,
})

const LoadCardsAction = (cards) => ({ type: ADD_CARD, cards })
export const LoadCardsThunk = ({ page, count }) => async (dispatch) => {
  dispatch(IsCardsFetching(true))
  const response = await LoadCards.load({ page, count })
  dispatch(LoadCardsAction(response))
  dispatch(IsCardsFetching(false))
  const IsFinished = response.length < 1
  dispatch(IsCardsFinishedAction(IsFinished))
}

export default WorkCardReducer

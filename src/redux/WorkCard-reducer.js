import { LoadCards } from '../api/api'

const LOAD_CARDS = 'WorkCard-reducer/LOAD_CARDS'
const IS_CARDS_LOADED = 'WorkCard-reducer/IS_CARDS_LOADED'
const IS_CARDS_FINISHED = 'WorkCard-reducer/IS_CARDS_FINISHED'
const ADD_PAGE_NUMBER = 'ADD_PAGE_NUMBER'
const IS_FIRST_RENDER = 'IS_FIRST_RENDER'
const CHANGE_CARDS_ACTION = 'CHANGE_CARDS_ACTION'
const InitalState = {
  cards: [],
  page: 1,
  isCardsLoaded: false,
  isCardsFinished: false,
  isFirstRender: true,
}
const WorkCardReducer = (state = InitalState, action) => {
  switch (action.type) {
    case LOAD_CARDS: {
      return {
        ...state,
        cards: [...state.cards, ...action.cards],
      }
    }
    case CHANGE_CARDS_ACTION: {
      return {
        ...state,
        cards: [...action.cards],
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
        page: action.page,
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

export const AddPageAction = (page) => ({ type: ADD_PAGE_NUMBER, page })
export const isFirstRenderAction = () => ({ type: IS_FIRST_RENDER })

export const IsCardsFetching = (isLoaded) => ({
  type: IS_CARDS_LOADED,
  isLoaded,
})
const IsCardsFinishedAction = (isFinished) => ({
  type: IS_CARDS_FINISHED,
  isFinished,
})

const LoadCardsAction = (cards) => ({ type: LOAD_CARDS, cards })
const ChangeCardsAction = (cards) => ({ type: CHANGE_CARDS_ACTION, cards })

export const LoadCardsThunk = ({ page, count }) => async (dispatch) => {
  dispatch(IsCardsFetching(true))
  const response = await LoadCards.load({ page, count })
  dispatch(IsCardsFetching(false))
  dispatch(LoadCardsAction(response))
  const IsFinished = response.length < 1
  dispatch(IsCardsFinishedAction(IsFinished))
}

export const SearchCards = ({ query, page, count }) => async (dispatch) => {
  dispatch(ChangeCardsAction([]))

  dispatch(IsCardsFetching(true))
  const response = await LoadCards.searchCards({ query, page, count })
  dispatch(IsCardsFetching(false))
  dispatch(ChangeCardsAction(response))
}

export default WorkCardReducer

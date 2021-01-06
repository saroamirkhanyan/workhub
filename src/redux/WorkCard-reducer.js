import { LoadCards } from '../api/api'

const IS_CARDS_LOADED = 'WorkCard-reducer/IS_CARDS_LOADED'
const IS_EXIST = 'IS_EXIST'
export const LOAD_CARDS = 'WorkCard-reducer/LOAD_CARDS'
export const RESET_CARDS = 'WorkCard-reducer/RESET_CARDS'

const InitalState = {
  cards: [],
  hasNextPage: null,
  hasPrevPage: null,
  limit: null,
  nextPage: 1,
  pagingCounter: null,
  prevPage: null,
  totalcards: null,
  totalPages: null,
  page: null,
  IsCardsLoaded: false,
  isExist: true,
}

const WorkCardReducer = (state = InitalState, action) => {
  switch (action.type) {
    case LOAD_CARDS: {
      return {
        ...state,
        ...action.cardsAndOther,
        cards: [...state.cards, ...action.cardsAndOther.docs],
      }
    }
    case IS_CARDS_LOADED: {
      return {
        ...state,
        IsCardsLoaded: action.isLoaded,
      }
    }
    case RESET_CARDS: {
      return {
        ...state,
        ...action.cardsAndOther,
        cards: [...action.cardsAndOther.docs],
      }
    }
    case IS_EXIST: {
      return {
        ...state,
        isExist: action.isExist,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export const IsCardsLoadedAction = (isLoaded) => ({
  type: IS_CARDS_LOADED,
  isLoaded,
})
export const DoesNotExistAction = (isExist) => ({
  type: IS_EXIST,
  isExist,
})
export const LoadCardsAction = (cardsAndOther, loadOrReset) => ({
  type: loadOrReset,
  cardsAndOther,
})

export const LoadOrResetSearchCards = (
  { page, limit, searchQuery },
  LOAD_OR_RESET
) => async (dispatch) => {
  dispatch(DoesNotExistAction(true))
  dispatch(IsCardsLoadedAction(true))
  const response = await LoadCards.load({ page, limit, searchQuery })
  dispatch(IsCardsLoadedAction(false))
  dispatch(LoadCardsAction(response, LOAD_OR_RESET))
  console.log(response)
  if (!response.docs.length) {
    dispatch(DoesNotExistAction(false))
  } else {
    dispatch(DoesNotExistAction(true))
  }
}

export default WorkCardReducer

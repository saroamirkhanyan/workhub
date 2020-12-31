import { LoadCards } from '../api/api'

const LOAD_CARDS = 'WorkCard-reducer/LOAD_CARDS'
const IS_CARDS_LOADED = 'WorkCard-reducer/IS_CARDS_LOADED'
const IS_FIRST_RENDER = 'WorkCard-reducer/IS_FIRST_RENDER'
const RESET_CARDS = 'WorkCard-reducer/RESET_CARDS'
const InitalState = {
  docs: [],
  hasNextPage: null,
  hasPrevPage: null,
  limit: null,
  nextPage: 1,
  pagingCounter: null,
  prevPage: null,
  totalDocs: null,
  totalPages: null,
  page: null,
  isCardsLoaded: false,
  isCardsFinished: false,
  isFirstRender: true,
}

const WorkCardReducer = (state = InitalState, action) => {
  switch (action.type) {
    case LOAD_CARDS: {
      return {
        ...state,
        ...action.docsAndOther,
        docs: [...state.docs, ...action.docsAndOther.docs],
      }
    }
    case IS_CARDS_LOADED: {
      return {
        ...state,
        isCardsLoaded: action.isLoaded,
      }
    }
    case RESET_CARDS: {
      return {
        ...state,
        ...action.docsAndOther,
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

export const isFirstRenderAction = () => ({ type: IS_FIRST_RENDER })

export const IsCardsLoaded = (isLoaded) => ({
  type: IS_CARDS_LOADED,
  isLoaded,
})

const LoadCardsAction = (docsAndOther, loadOrReset) => ({
  type: loadOrReset,
  docsAndOther,
})

export const LoadCardsThunk = ({ page, limit, searchQuery }) => async (
  dispatch
) => {
  dispatch(IsCardsLoaded(true))
  const response = await LoadCards.load({ page, limit, searchQuery })
  dispatch(IsCardsLoaded(false))
  dispatch(LoadCardsAction(response, LOAD_CARDS))
}

export const ResetSearchCards = ({ page, limit, searchQuery }) => async (
  dispatch
) => {
  dispatch(IsCardsLoaded(true))
  const response = await LoadCards.load({ page, limit, searchQuery })
  dispatch(IsCardsLoaded(false))
  dispatch(LoadCardsAction(response, RESET_CARDS))
}

export default WorkCardReducer

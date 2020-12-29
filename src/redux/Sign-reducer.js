// import { Sign } from '../api/api'

const SIGN = 'WorkCard-reducer/IS_FIRST_RENDER'

const InitalState = {
  isSign: false,
}
const SignReducer = (state = InitalState, action) => {
  switch (action.type) {
    case SIGN: {
      return {
        ...state,
      }
    }
    default: {
      return { ...state }
    }
  }
}

// export const LoadCardsThunk = ({ page, limit }) => async (dispatch) => {
//   dispatch(IsCardsLoaded(true))
//   const response = await LoadCards.load({ page, limit })
//   dispatch(IsCardsLoaded(false))
//   dispatch(LoadCardsAction(response))
//   const IsFinished = response.length < 1
//   dispatch(IsCardsFinishedAction(IsFinished))
// }

export default SignReducer

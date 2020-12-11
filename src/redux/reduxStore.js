import { applyMiddleware, combineReducers, createStore } from 'redux'
import { compose } from 'redux'
import thunk from 'redux-thunk'
import WorkCardReducer from './WorkCard-reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers = combineReducers({
  WorkCards: WorkCardReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

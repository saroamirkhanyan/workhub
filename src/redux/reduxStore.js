import { applyMiddleware, combineReducers, createStore } from 'redux'
import { compose } from 'redux'
import thunk from 'redux-thunk'
import JobCardReducer from './jobCard-reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers = combineReducers({
  JobCards: JobCardReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

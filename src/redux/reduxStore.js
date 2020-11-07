import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { compose } from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
let reducers = combineReducers({})

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

export default store

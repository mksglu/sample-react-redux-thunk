import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Reducers'

const composeEnhancer =
  window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store

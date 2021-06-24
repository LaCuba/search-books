import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkCreator from 'redux-thunk'
import SearchReducer from './search-reducer'

const reducers = combineReducers({
  snippets: SearchReducer
})

const store = createStore(reducers, applyMiddleware(thunkCreator))

window.store = store

export default store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkCreator from 'redux-thunk'
import reducers from './reducers/reducers'

const combinedReducer = combineReducers(reducers)

const store = createStore(combinedReducer, applyMiddleware(thunkCreator))

export default store
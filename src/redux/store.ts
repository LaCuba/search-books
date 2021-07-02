import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkCreator from 'redux-thunk'
import reducers from './reducers/reducers'

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, applyMiddleware(thunkCreator))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
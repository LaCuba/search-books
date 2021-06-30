import { Reducer } from "react"
import { getType } from "typesafe-actions"
import { Action } from "../actions/actions"
import * as searchActions from "../actions/search"
import * as modalActions from "../actions/modal"
import * as preloaderActions from "../actions/preloader"

type StorageType = {
  valueSearch: string 
  snippets: null | any
  count: null | number
}

const initialState = {
  storage: {
    valueSearch: '',
    snippets: null,
    count: null,
  } as StorageType,
  book: null as string | null,
  isFetching: false
}

type initialStateType = typeof initialState

const SearchReducer: Reducer<initialStateType, Action> = (state = initialState, action: Action) => {
  switch (action.type) {
    case getType(searchActions.setBooks):
      return {
        ...state,
        storage: {
          ...state.storage,
          snippets: action.payload.snippets,
          count: action.payload.count
        },
      }
    case getType(searchActions.setValueSearch):
      return {
        ...state,
        storage: {
          ...state.storage,
          valueSearch: action.payload.value
        }
      }
    case getType(preloaderActions.toggleIsFetching):
    return {
      ...state,
      isFetching: action.payload.isFetching
    }
    case getType(modalActions.setBook):
      if (action.payload.bookKey) {
        return {
          ...state,
          // book: state.storage.snippets.filter(snippet => snippet.key === action.payload.bookKey)
      }} else {
        return {
          ...state,
          book: null
        } 
      }
    default: 
      return state
  }
}

export default SearchReducer
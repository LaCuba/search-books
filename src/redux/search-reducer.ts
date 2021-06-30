import { Reducer } from "react"
import { getType } from "typesafe-actions"
import { searchApi } from "../api/api"
import { Action } from "./actions/actions"
import * as searchActions from "./actions/search"
import * as modalActions from "./actions/modal"
import * as preloaderActions from "./actions/preloader"

import { toggleIsFetching } from "./actions/preloader"
import { setBooks, setValueSearch } from "./actions/search"

type storageType = {
  valueSearch: string 
  snippets: null | any
  count: null | number
}

const initialState = {
  storage: {
    valueSearch: '',
    snippets: null,
    count: null,
  } as storageType,
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

export const getBooks = (value: string, currentPage = 1) => (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  searchApi.getBooks(value, currentPage)
  .then(response => {
    dispatch(toggleIsFetching(false))
    dispatch(setValueSearch(value))
    dispatch(setBooks(response.docs, response.numFound))
  })
}

export default SearchReducer
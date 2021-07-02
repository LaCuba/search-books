import { Reducer } from "react"
import * as searchActions from "../actions/search"
import * as modalActions from "../actions/modal"
import * as preloaderActions from "../actions/preloader"
import { SnippetType } from "../thunk/thunk"
import { AnyAction } from "redux"

type StorageType = {
  valueSearch: string
  snippets: null | Array<SnippetType>
  count: null | number
}

const initialState = {
  storage: {
    valueSearch: '',
    snippets: null,
    count: null,
  } as StorageType,
  bookKey: null as null | string,
  isFetching: false
}

type InitialStateType = typeof initialState

const SearchReducer = (state = initialState, action: AnyAction): InitialStateType => {
  switch (action.type) {
    case 'search/SET-SNIPPETS':
      return {
        ...state,
        storage: {
          ...state.storage,
          snippets: action.payload.snippets,
          count: action.payload.count
        }
      }
    case 'search/SET-VALUE-SEARCH':
      return {
        ...state,
        storage: {
          ...state.storage,
          valueSearch: action.payload.value
        }
      }
    case 'preloader/TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    case 'modal/SET-BOOK':
      if (action.payload.bookKey) {
        return {
          ...state,
          bookKey: action.payload.bookKey
        }
      }
      return {
        ...state,
        bookKey: null
      }
    default:
      return state
  }
}

export default SearchReducer
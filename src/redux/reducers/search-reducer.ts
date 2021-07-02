import { Reducer } from "react"
import * as searchActions from "../actions/search"
import * as modalActions from "../actions/modal"
import * as preloaderActions from "../actions/preloader"
import { SnippetType } from "../thunk/thunk"
import { Actions } from "../actions/actions"
import { getType } from "typesafe-actions"

type StorageType = {
  valueSearch: string
  snippets: null | Array<SnippetType>
  snippetscount: null | number
}

const initialState = {
  storage: {
    valueSearch: '',
    snippets: null,
    snippetscount: null,
  } as StorageType,
  bookKey: null as null | string,
  isFetching: false
}

type InitialStateType = typeof initialState

const SearchReducer = (state = initialState, action: Actions): InitialStateType => {
  switch (action.type) {
    case getType(searchActions.setBooks):
      return {
        ...state,
        storage: {
          ...state.storage,
          snippets: action.payload.snippets,
          snippetscount: action.payload.snippetscount
        }
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
    case getType(modalActions.setBookKey):
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
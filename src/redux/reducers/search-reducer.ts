import { Reducer } from "react"
import { getType } from "typesafe-actions"
import { Action } from "../actions/actions"
import * as searchActions from "../actions/search"
import * as modalActions from "../actions/modal"
import * as preloaderActions from "../actions/preloader"
import { SnippetType } from "../thunk/thunk"

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

const SearchReducer: Reducer<InitialStateType, Action> = (state = initialState, action: Action) => {
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
    case getType(modalActions.setBookKey):
      if (action.payload.bookKey) {
        return {
          ...state,
          bookKey: action.payload.bookKey
        }
      } else {
        return {
          ...state,
          bookKey: null
        }
      }
    default:
      return state
  }
}

export default SearchReducer
import { searchApi } from "../api/api"

const SET_SNIPPETS = "SET-SNIPPETS"
const SET_VALUE_SEARCH = "SET-VALUE-SEARCH"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_BOOK = "SET-BOOK"

const initialState = {
  storage: {
    valueSearch: '',
    snippets: null,
    count: null,
  },
  book: null,
  isFetching: false
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS:
      return {
        ...state,
        storage: {
          ...state.storage,
          snippets: action.snippets,
          count: action.count
        }
      }
    case SET_VALUE_SEARCH:
      return {
        ...state,
        storage: {
          ...state.storage,
          valueSearch: action.value
        }
      }
    case TOGGLE_IS_FETCHING:
    return {
      ...state,
      isFetching: action.isFetching
    }
    case SET_BOOK:
      if (action.bookKey) {
        return {
          ...state,
          book: state.storage.snippets.filter(el => el.key === action.bookKey)
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

const setBooks = (snippets, count) => ({type: SET_SNIPPETS, snippets, count})
const setValueSearch = (value) => ({type: SET_VALUE_SEARCH, value})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setBook = (bookKey) => ({type: SET_BOOK, bookKey})

export const getBooks = (value, currentPage = 1) => (dispatch) => {
  dispatch(toggleIsFetching(true))
  searchApi.getBooks(value, currentPage)
  .then(response => {
    dispatch(toggleIsFetching(false))
    dispatch(setValueSearch(value))
    dispatch(setBooks(response.docs, response.numFound))
  })
}

export default SearchReducer
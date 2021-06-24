import { searchApi } from "../api/api"

const SET_SNIPPETS = "SET-SNIPPETS"
const SET_BOOK = "SET-BOOK"

const initialState = {
  snippets: null,
  count: null,
  book: null
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS:
      return {
        ...state,
        snippets: action.snippets,
        count: action.count
      }
    case SET_BOOK:
      if (action.bookKey) {
        return {
          ...state,
          book: state.snippets.filter(el => el.key === action.bookKey)
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
export const setBook = (bookKey) => ({type: SET_BOOK, bookKey})

export const getBooks = (value) => (dispatch) => {
  searchApi.getBooks(value)
  .then(response => {
    dispatch(setBooks(response.docs, response.numFound))
  })
}

export default SearchReducer
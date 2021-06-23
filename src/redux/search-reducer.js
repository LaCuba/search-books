import { searchApi } from "../api/api"

const SET_SNIPPETS = "SET-SNIPPETS"

const initialState = {
  snippets: null,
  count: null
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS:
      return {
        ...state,
        snippets: action.snippets,
        count: action.count
      }
    default: 
      return state
  }
}

const setBooks = (snippets, count) => ({type: SET_SNIPPETS, snippets, count})

export const getBooks = (value) => (dispatch) => {
  searchApi.getBooks(value)
  .then(response => {
    dispatch(setBooks(response.docs, response.numFound))
  })
}

export default SearchReducer
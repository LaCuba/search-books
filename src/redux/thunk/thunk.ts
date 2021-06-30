import { searchApi } from "../../api/api"
import { toggleIsFetching } from "../actions/preloader"
import { setBooks, setValueSearch } from "../actions/search"



export const getBooks = (value: string, currentPage = 1) => (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  searchApi.getBooks(value, currentPage)
  .then(response => {
    dispatch(toggleIsFetching(false))
    dispatch(setValueSearch(value))
    dispatch(setBooks(response.docs, response.numFound))
  })
}
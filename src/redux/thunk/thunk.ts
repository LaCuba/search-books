import { searchApi } from "../../api/api"
import { toggleIsFetching } from "../actions/preloader"
import { setBooks, setValueSearch } from "../actions/search"

export type SnippetType = {
  key: string
  title: string
  cover_i: string | null
  publish_date: Array<string> | null
  author_name: Array<string> | null
  isbn: Array<string>
  publisher: Array<string> | null
}

export const getBooks = (value: string, currentPage = 1) => (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  searchApi.getBooks(value, currentPage)
  .then(response => {
    const snippets = response.docs.map((serverBook: SnippetType) => {
      return {
        key: serverBook.key,
        title: serverBook.title,
        cover_i: serverBook.cover_i || null,
        publish_date: serverBook.publish_date || null,
        author_name: serverBook.author_name || null,
        isbn: serverBook.isbn,
        publisher: serverBook.publisher || null
      }
    })

    dispatch(toggleIsFetching(false))
    dispatch(setValueSearch(value))
    dispatch(setBooks(snippets, response.numFound))
  })
}
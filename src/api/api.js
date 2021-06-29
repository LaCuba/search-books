import axios from "axios";

const instance = axios.create({
  baseURL: 'https://openlibrary.org/'
})

export const searchApi = {
  getBooks(value, currentPage) {
    return(
      instance.get(`search.json?q=${value}&page=${currentPage}`)
      .then(response => response.data)
    )
  }
}
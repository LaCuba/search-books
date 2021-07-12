import axios from "axios"

const instance = axios.create({
  baseURL: "https://openlibrary.org/",
})

const source = axios.CancelToken.source()

export const searchApi = {
  getBooks(value: string, currentPage: number) {
    return instance
      .get(`search.json?q=${value}&page=${currentPage}`, {
        cancelToken: source.token,
      })
      .then((response) => {
        source.cancel()
        return response.data
      })
  },
}

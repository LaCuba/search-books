import axios from "axios";

const instance = axios.create({
  baseURL: 'http://openlibrary.org/'
})

export const searchApi = {
  getBooks(value) {
    debugger
    return(
      instance.get(`search.json?q=${value}`)
      .then(response => response.data)
    )
  }
}
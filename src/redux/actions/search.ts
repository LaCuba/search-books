type SetBooksType = {
  type: string
  payload: {
    snippets: string
    count: number
  }
}

export const setBooks = (snippets: any, count: number) => ({
  type: "search/SET-SNIPPETS",
  payload: { snippets, count }
})

export const setValueSearch = (value: string) => ({
  type: "search/SET-VALUE-SEARCH",
  payload: { value }
})

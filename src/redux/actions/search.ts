import { createCustomAction } from "typesafe-actions"

export const setBooks = createCustomAction(
  "search/SET-SNIPPETS",
  (snippets: any, snippetscount: number) => ({
    payload: { snippets, snippetscount },
  })
)

export const setValueSearch = createCustomAction(
  "search/SET-VALUE-SEARCH",
  (value: string) => ({
    payload: { value },
  })
)

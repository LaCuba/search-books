import { createCustomAction } from "typesafe-actions";

export const setBooks = createCustomAction("search/SET-SNIPPETS", (snippets: any, count: number) => ({
  payload: { snippets, count },
}))

export const setValueSearch = createCustomAction("search/SET-VALUE-SEARCH", (value: string) => ({
  payload: { value },
}))

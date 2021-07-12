import { RootState } from "../store"

export const bookKeySelector = (state: RootState) => state.snippets.bookKey
export const snippetsSelector = (state: RootState) =>
  state.snippets.storage.snippets

import { RootState } from "../store"

export const snippetscount = (state: RootState) =>
  state.snippets.storage.snippetscount

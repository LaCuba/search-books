import { RootState } from "../store";

export const storage = (state: RootState) => state.snippets.storage

export const isFetching = (state: RootState) => state.snippets.isFetching
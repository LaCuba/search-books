import { createCustomAction } from "typesafe-actions"

export const toggleIsFetching = createCustomAction(
  "preloader/TOGGLE-IS-FETCHING",
  (isFetching: boolean) => ({
    payload: { isFetching },
  })
)

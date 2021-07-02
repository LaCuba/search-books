type ToggleIsFetchingType = {
  type: string
  payload: {
    isFetching: boolean
  }
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: 'preloader/TOGGLE-IS-FETCHING',
  payload: { isFetching }
})

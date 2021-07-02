type SetBookKeyType = {
  type: string
  payload: {
    bookKey: string | null
  }
}

export const setBookKey = (bookKey: string | null): SetBookKeyType => ({
  type: 'modal/SET-BOOK',
  payload: { bookKey }
})
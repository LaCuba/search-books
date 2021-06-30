import { createCustomAction } from 'typesafe-actions';

export const setBookKey = createCustomAction('modal/SET-BOOK', (bookKey: string | null) => ({
  payload: { bookKey }
}))

import { createCustomAction } from 'typesafe-actions';

export const setBook = createCustomAction('modal/SET-BOOK', (bookKey: string | null) => ({
  payload: { bookKey }
}))

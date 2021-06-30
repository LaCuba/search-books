import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/thunk/thunk'
import styles from './Search.module.scss'

const Search = () => {

  const count = useSelector(state => state.snippets.count)
  const dispatch = useDispatch()

  const [character, setCharacter] = useState('')
  const [timer, setTimer] = useState(0)

  const onSearchChange = (e) => {
    setCharacter(e.currentTarget.value)
    if (e.currentTarget.value) {
      clearTimeout(timer)
      setTimer(setTimeout((value) =>
        dispatch(getBooks(value.replaceAll(/\s+/g, '+'))), 1000, e.currentTarget.value))
    }
  }

  const searchBooks = () => {
    if (character) {
      const value = character.replaceAll(/\s+/g, '+')
      dispatch(getBooks(value))
    }
  }

  return <>
    <div className={styles.panel}>
      <input type="text" placeholder="Search a book." onChange={onSearchChange} value={character} />
      <button onClick={searchBooks}>Search</button>
      {count && <div className={styles.resultCount}>
        <p>Results: {count}</p>
      </div>}
    </div>
  </>
}

export default Search
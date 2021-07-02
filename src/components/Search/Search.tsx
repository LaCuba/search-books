import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selector from './../../redux/selectors/selectors'
import { getBooks } from '../../redux/thunk/thunk'
import styles from './Search.module.scss'

const Search = () => {

  const count = useSelector(selector.search.snippetscount)
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [timer, setTimer] = useState(0)

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  //   if (e.currentTarget.value) {
  //     clearTimeout(timer)
  //     const localTimer: ReturnType<typeof setTimeout> = setTimeout((value) => 
  //       dispatch(getBooks(value.replaceAll(/\s+/g, '+'))), 1000, e.currentTarget.value)
  //     setTimer(localTimer)
  //   }
  }

  const searchBooks = () => {
    if (text) {
      const value = text.replace(/\s+/g, '+')
      dispatch(getBooks(value))
    }
  }

  return <>
    <div className={styles.panel}>
      <input type="text" placeholder="Search a book." onChange={onSearchChange} value={text} />
      <button onClick={searchBooks}>Search</button>
      {count && <div className={styles.resultCount}>
        <p>Results: {count}</p>
      </div>}
    </div>
  </>
}

export default Search
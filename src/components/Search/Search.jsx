import React from 'react'
import { useState } from 'react'
import styles from './Search.module.scss'

const Search = (props) => {

  const [character, setCharacter] = useState('')
  const [timer, setTimer] = useState(0)
  
  const onSearchChange = (e) => {
    setCharacter(e.currentTarget.value)
    clearTimeout(timer)
    setTimer(setTimeout((value) => console.log(value), 1000, e.currentTarget.value))
  }
  
  const searchBooks = () => {
    console.log(character)
  }

  return <> 
  <div className={styles.panel}>
    <input type="text" placeholder="Search a book." onChange={onSearchChange} value={character} />
    <button onClick={searchBooks}>Search</button>
  </div>
  </>
}

export default Search
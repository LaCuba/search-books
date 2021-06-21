import React from 'react'
import { useState } from 'react'
import styles from './Search.module.scss'

const Search = (props) => {

  const [character, setCharacter] = useState('')

  const onSearchChange = (e) => {
    setCharacter(e.currentTarget.value)
  }

  const searchBook = () => {
    console.log(character)
    setCharacter('')
  }

  return <> 
  <div className={styles.panel}>
    <input type="text" placeholder="Search a book." onChange={onSearchChange} value={character} />
    <button onClick={searchBook}>Search</button>
  </div>
  </>
}

export default Search
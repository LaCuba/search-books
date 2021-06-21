import React from 'react'
import styles from './Search.module.scss'

const Search = (props) => {
  return <> 
  <div className={styles.panel}>
    <input type="text" placeholder="Search a book." />
    <button>Search</button>
  </div>
  </>
}

export default Search
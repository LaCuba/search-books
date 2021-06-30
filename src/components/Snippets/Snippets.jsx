import React from 'react'
import styles from './Snippets.module.scss'
import bookImg from './../../icons/book.svg'
import { useDispatch } from 'react-redux'

const Snippets = ({ coverId, title, author, bookKey, setBook }) => {

  const dispatch = useDispatch()

  const cover = 'http://covers.openlibrary.org/b/id/' + coverId + '-S.jpg'

  return <>
    <a className={styles.container} onClick={() => dispatch(setBook(bookKey))}>
      <img className={styles.cover} src={cover ? cover : bookImg} alt="cover" />
      <h3 className={styles.title}>{title}</h3>
      {author && <div className={styles.author}>
        <b>Author: </b><p> { author.length > 1 ? author.join(', ') : author[0] } </p>
      </div>}
    </a>
  </>
}

export default Snippets
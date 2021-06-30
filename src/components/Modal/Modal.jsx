import React from 'react'
import styles from './Modal.module.scss'
import bookImg from './../../icons/book.svg'
import closeImg from './../../icons/close.svg'
import { setBookKey } from "../../redux/actions/modal"
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {

  const dispatch = useDispatch()

  const bookKey = useSelector(state => state.snippets.bookKey)
  const snippets = useSelector(state => state.snippets.storage.snippets)

  const book = bookKey && snippets && snippets.filter(snippet => snippet.key === bookKey)

  return (
    book &&
    <div className={book ? styles.modalActive : styles.modal} onClick={() => dispatch(setBookKey(null))}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>{book[0].title}</h3>
          <div className={styles.cancel}>
            <a onClick={() => dispatch(setBookKey(null))}>
              <img src={closeImg} alt="close" />
            </a>
          </div>
        </div>
        <div className={styles.cover}>
          <img src={book[0].cover_i 
            ? 'http://covers.openlibrary.org/b/id/' + book[0].cover_i + '-L.jpg'
            : bookImg} alt="cover" />
        </div>
        <div className={styles.info}>
          {book[0].title && <div className={styles.title}>
            <b>Title: </b> <p>{book[0].title}</p>
          </div>}
          {book[0].author_name && <div className={styles.author}>
            <b>Author: </b>
            {book[0].author_name.length > 1 
              ? book[0].author_name.join(', ') 
              : book[0].author_name }
          </div>}
          {book[0].publish_date && <div className={styles.datePublish}>
            <b>Publish date: </b>
            <p>
              {book[0].publish_date[0]}
            </p>
          </div>}
          {book[0].publisher && <div className={styles.publisher}>
            <b>Publisher: </b>
            <p>
              {book[0].publisher[0]}
            </p>
          </div>}
          {book[0].isbn && <div className={styles.isbn}>
            <b>ISBN: </b>
            <p>
              {book[0].isbn[0]}
            </p>
          </div>}
        </div>
      </div>
    </div>
  )
} 

export default Modal
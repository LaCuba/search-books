import React from 'react'
import styles from './Modal.module.scss'

const Modal = (props) => {

  return (
    props.book &&
    <div className={props.book ? styles.modalActive : styles.modal} onClick={() => props.setBook(null)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>{props.book[0].title}</h3>
          <div className={styles.cancel}>
            X
          </div>
        </div>
        <div className={styles.cover}>
          <img src={props.book[0].cover_i 
            ? 'http://covers.openlibrary.org/b/id/' + props.book[0].cover_i + '-L.jpg'
            : undefined} alt="cover" />
        </div>
        <div className={styles.info}>
          {props.book[0].title && <div className={styles.title}>
            <b>Title: </b> <p>{props.book[0].title}</p>
          </div>}
          {props.book[0].author_name && <div className={styles.author}>
            <b>Author: </b>
            {props.book[0].author_name.length > 1 
              ? props.book[0].author_name.join(', ') 
              : props.book[0].author_name }
          </div>}
          {props.book[0].publish_date && <div className={styles.datePublish}>
            <b>Publish date: </b>
            <p>
              {props.book[0].publish_date[0]}
            </p>
          </div>}
          {props.book[0].publisher && <div className={styles.publisher}>
            <b>Publisher: </b>
            <p>
              {props.book[0].publisher[0]}
            </p>
          </div>}
          {props.book[0].isbn && <div className={styles.isbn}>
            <b>ISBN: </b>
            <p>
              {props.book[0].isbn[0]}
            </p>
          </div>}
        </div>
      </div>
    </div>
  )
} 

export default Modal
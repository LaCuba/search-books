import React from 'react'
import styles from './Modal.module.scss'

const Modal = (props) => {

  // if (!props.book) {
  //   return <div>loading....</div>
  // }

  return (
    <div className={props.book ? styles.modalActive : styles.modal} onClick={() => props.setBook(null)}>
      <div className={styles.content}>
        <div className={styles.cover}>
          {props.bookKey}
        </div>
        <div className={styles.title}></div>
        <div className={styles.author}></div>
        <div className={styles.datePublish}></div>
        <div className={styles.publisher}></div>
        <div className={styles.isbn}></div>
      </div>
    </div>
  )
} 

export default Modal
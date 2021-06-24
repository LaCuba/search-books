import React from 'react'
import styles from './Modal.module.scss'

const Modal = (props) => {

  return (
    <div className={props.active ? styles.modalActive : styles.modal} onClick={() => props.setActive(false)}>
      <div className={styles.content}>
        <div className={styles.cover}>
          
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
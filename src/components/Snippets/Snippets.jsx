import React from 'react'
import styles from './Snippets.module.scss'

const Snippets = (props) => {
  return <>
    <a className={styles.container} href="#">
      <img className={styles.cover} src={props.cover} alt="cover" />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.author}>
        <b>Автор: </b><p>{props.author}</p>
      </div>
    </a>
  </>
}

export default Snippets
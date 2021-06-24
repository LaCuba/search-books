import React from 'react'
import styles from './Snippets.module.scss'
import bookImg from './../../icons/book.svg'

const Snippets = (props) => {

  const cover = 'http://covers.openlibrary.org/b/id/' + props.cover + '-S.jpg'

  return <>
    <a className={styles.container} onClick={() => props.setBook(props.bookKey)}>
      <img className={styles.cover} src={props.cover ? cover : bookImg} alt="cover" />
      <h3 className={styles.title}>{props.title}</h3>
      {props.author && <div className={styles.author}>
        <b>Author: </b><p> { props.author.length > 1 ? props.author.join(', ') : props.author[0] } </p>
      </div>}
    </a>
  </>
}

export default Snippets
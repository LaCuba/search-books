import React from 'react'
import styles from './Snippets.module.scss'

const Snippets = (props) => {
  return <>
    <a className={styles.container} href="#">
      <img className={styles.cover} src="https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg" alt="cover" />
      <h3 className={styles.title}>Как не pro*бать свою жизнь</h3>
      <div className={styles.author}>
        <b>Автор: </b><p>Байер Майк</p>
      </div>
    </a>
  </>
}

export default Snippets
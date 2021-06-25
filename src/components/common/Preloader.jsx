import React from 'react'
import preloader from './../../icons/preloader.gif'
import styles from './Preloader.module.scss'

const Preloader = (props) => {
  return props.isFetching 
  ? <div className={styles.preloader}>
    <img src={preloader} alt="preloader" />
  </div>
  : null
}

export default Preloader
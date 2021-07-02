import React, { FC } from 'react'
import preloader from './../../icons/preloader.gif'
import styles from './Preloader.module.scss'

type PreloaderProps = {
  isFetching: boolean
}

const Preloader: FC<PreloaderProps> = ({ isFetching }) => {
  return isFetching
    ? <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
    : null
}

export default Preloader
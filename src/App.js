import React from 'react'
import styles from './App.module.scss';
import Search from './components/Search/Search'

function App() {
  return (
    <div className={styles.app}>
      <Search />
    </div>
  );
}

export default App;

import React from 'react'
import styles from './App.module.scss';
import Search from './components/Search/Search'
import Snippets from './components/Snippets/Snippets'

function App() {
  return (
    <div className={styles.app}>
      <Search />
      <Snippets />
    </div>
  );
}

export default App;

import React from 'react'
import styles from './App.module.scss';
import Search from './components/Search/Search'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {
  return (
    <div className={styles.app}>
      <Search />
      <SnippetsContainer />
    </div>
  );
}

export default App;

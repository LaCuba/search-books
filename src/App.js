import React from 'react'
import styles from './App.module.scss';
import SearchContainer from './components/Search/SearchContainer'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {
  return (
    <div className={styles.app}>
      <SearchContainer />
      <SnippetsContainer />
    </div>
  );
}

export default App;

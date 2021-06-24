import React from 'react'
import styles from './App.module.scss';
import SearchContainer from './components/Search/SearchContainer'
import ModalContainer from './components/Modal/ModalContainer'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {

  return (
    <div className={styles.app}>
      <ModalContainer />
      <SearchContainer />
      <SnippetsContainer />
    </div>
  );
}

export default App;

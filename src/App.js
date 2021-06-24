import React from 'react'
import styles from './App.module.scss';
import { useState } from 'react'
import SearchContainer from './components/Search/SearchContainer'
import ModalContainer from './components/Modal/ModalContainer'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {

  return (
    <div className={styles.app}>
      <SearchContainer />
      <SnippetsContainer />
      <ModalContainer />
    </div>
  );
}

export default App;

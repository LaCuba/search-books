import React from 'react'
import styles from './App.module.scss';
import Search from './components/Search/Search'
import ModalContainer from './components/Modal/ModalContainer'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {

  return (
    <div className={styles.app}>
      <ModalContainer />
      <Search />
      <SnippetsContainer />
    </div>
  );
}

export default App;

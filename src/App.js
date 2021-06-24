import React from 'react'
import styles from './App.module.scss';
import { useState } from 'react'
import SearchContainer from './components/Search/SearchContainer'
import Modal from './components/Modal/Modal'
import SnippetsContainer from './components/Snippets/SnippetsContainer';

function App() {

  const [active, setActive] = useState(true)

  return (
    <div className={styles.app}>
      <SearchContainer />
      <SnippetsContainer />
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;

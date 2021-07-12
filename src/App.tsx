import React from "react"
import styles from "./App.module.scss"
import Search from "./components/Search/Search"
import Modal from "./components/Modal/Modal"
import SnippetsContainer from "./components/Snippets/SnippetsContainer"

function App() {
  return (
    <div className={styles.app}>
      <Modal />
      <Search />
      <SnippetsContainer />
    </div>
  )
}

export default App

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Snippet from "./Snippet"
import { getBooks } from "../../redux/thunk/thunk"
import { setBookKey } from "../../redux/actions/modal"
import Paginator from "./Paginator"
import { useState } from "react"
import styles from "./SnippetsContainer.module.scss"
import Preloader from "../common/Preloader"
import * as selector from "./../../redux/selectors/selectors"

const SnippetsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const storage = useSelector(selector.snippets.storage)
  const isFetching = useSelector(selector.snippets.isFetching)

  const dispatch = useDispatch()

  const pageClick = (p: number) => {
    dispatch(getBooks(storage.valueSearch, p))
    setCurrentPage(p)
  }

  return (
    <>
      <Preloader isFetching={isFetching} />
      {storage.snippets && (
        <div>
          {storage.snippets.map((snippet) => (
            <Snippet
              key={snippet.key}
              coverId={snippet.cover_i ? snippet.cover_i : null}
              title={snippet.title}
              author={snippet.author_name ? snippet.author_name : null}
              bookKey={snippet.key}
              setBookKey={setBookKey}
            />
          ))}
          <div className={styles.paginator}>
            {storage.snippetscount && (
              <Paginator
                countSnippets={storage.snippetscount}
                currentPage={currentPage}
                pageClick={pageClick}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SnippetsContainer

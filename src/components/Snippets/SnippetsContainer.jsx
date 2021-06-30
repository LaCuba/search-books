import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Snippets from './Snippets'
import { setBook, getBooks } from './../../redux/search-reducer'
import Paginator from './Paginator'
import { useState } from 'react'
import styles from './SnippetsContainer.module.scss'
import Preloader from '../common/Preloader'

const SnippetsContainer = () => {

  const [currentPage, setCurrentPage] = useState(1)
  
  const storage = useSelector(state => state.snippets.storage)
  const isFetching = useSelector(state => state.snippets.isFetching)

  const dispatch = useDispatch()

  const pageClick = (p) => {
    dispatch(getBooks(storage.valueSearch, p))
    setCurrentPage(p)
  }

  return <>
    <Preloader isFetching={isFetching} />
    {storage.snippets &&
      <div>
        {Object.keys(storage.snippets)
          .map(key => <Snippets key={key}
            coverId={storage.snippets[key].cover_i ? storage.snippets[key].cover_i : null}
            title={storage.snippets[key].title}
            author={storage.snippets[key].author_name ? storage.snippets[key].author_name : null}
            bookKey={storage.snippets[key].key}
            setBook={setBook}
          />)}
        <div className={styles.paginator}>
          <Paginator countSnippets={storage.count}
            currentPage={currentPage}
            pageClick={pageClick}
          />
        </div>
      </div>}
  </>
}

export default SnippetsContainer
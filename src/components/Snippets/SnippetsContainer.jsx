import React from 'react'
import { connect } from 'react-redux'
import Snippets from './Snippets'
import { setBook, getBooks } from './../../redux/search-reducer'
import Paginator from './Paginator'
import { useState } from 'react'
import styles from './SnippetsContainer.module.scss'
import Preloader from '../common/Preloader'

const SnippetsContainer = (props) => {

  const [currentPage, setCurrentPage] = useState(1)

  const pageClick = (p) => {
    props.getBooks(props.value, p)
    setCurrentPage(p)
  }

  return <>
    <Preloader isFetching={props.isFetching} />
    {props.snippets &&
      <div>
        {Object.keys(props.snippets)
          .map(key => <Snippets key={key}
            cover={props.snippets[key].cover_i ? props.snippets[key].cover_i : null}
            title={props.snippets[key].title}
            author={props.snippets[key].author_name ? props.snippets[key].author_name : null}
            bookKey={props.snippets[key].key}
            setBook={props.setBook}
          />)}
        <div className={styles.paginator}>
          <Paginator countSnippets={props.countSnippets}
            currentPage={currentPage}
            pageClick={pageClick}
          />
        </div>
      </div>}
  </>
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets.snippets,
    countSnippets: state.snippets.count,
    value: state.snippets.valueSearch,
    isFetching: state.snippets.isFetching
  }
}

export default connect(mapStateToProps, { setBook, getBooks })(SnippetsContainer)
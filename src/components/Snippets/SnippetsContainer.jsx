import React from 'react'
import { connect } from 'react-redux'
import Snippets from './Snippets'
import { setBook, getBooks } from './../../redux/search-reducer'
import Paginator from './Paginator'
import { useState } from 'react'
import styles from './SnippetsContainer.module.scss'

const SnippetsContainer = (props) => {

  const [currentPage, setCurrentPage] = useState(1)

  const pageClick = (p) => {
    props.getBooks(props.value, p)
    setCurrentPage(p)
  }

  return props.snippets &&
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
          countSnippetsOnPage={100}
          currentPage={currentPage}
          pageClick={pageClick}
          portionSize={5}
        />
      </div>
    </div>
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets.snippets,
    countSnippets: state.snippets.count,
    value: state.snippets.valueSearch
  }
}

export default connect(mapStateToProps, { setBook, getBooks })(SnippetsContainer)
import React from 'react'
import { connect } from 'react-redux'
import Snippets from './Snippets'
import { setBook } from './../../redux/search-reducer'

const SnippetsContainer = (props) => {

  return props.snippets && Object.keys(props.snippets)
    .map(key => <Snippets key={key} 
      cover={props.snippets[key].cover_i ? props.snippets[key].cover_i : null}
      title={props.snippets[key].title}
      author={props.snippets[key].author_name ? props.snippets[key].author_name : null}
      bookKey={props.snippets[key].key}
      setBook={props.setBook}
      />)
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets.snippets
  }
}

export default connect(mapStateToProps, { setBook })(SnippetsContainer)
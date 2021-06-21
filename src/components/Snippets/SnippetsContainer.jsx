import React from 'react'
import { connect } from 'react-redux'
import Snippets from './Snippets'

const SnippetsContainer = (props) => {

  return Object.keys(props.snippets).map(key => <Snippets cover={props.snippets[key].cover}
                                                          title={props.snippets[key].title}
                                                          author={props.snippets[key].author}
                                                          />)
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets.snippets
  }
}

export default connect(mapStateToProps)(SnippetsContainer)
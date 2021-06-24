import { connect } from 'react-redux'
import Search from './Search'
import {getBooks} from './../../redux/search-reducer'

const mapStateToProps = (state) => {
  return {
    count: state.snippets.count
  }
}

export default connect(mapStateToProps, {getBooks})(Search)
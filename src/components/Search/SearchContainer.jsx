import { connect } from 'react-redux'
import Search from './Search'
import {getBooks} from './../../redux/search-reducer'

export default connect(null, {getBooks})(Search)
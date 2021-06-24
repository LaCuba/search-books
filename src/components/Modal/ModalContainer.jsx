import { connect } from "react-redux"
import { setBook } from "../../redux/search-reducer"
import Modal from "./Modal"

const mapStateToProps = (state) => {
  return {
    book: state.snippets.book
  }
}

export default connect(mapStateToProps, { setBook })(Modal)
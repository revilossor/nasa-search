import { connect } from 'react-redux'
import { fetchSearchIfAble } from '../actions'
import SearchBox from '../components/SearchBox'

const mapStateToProps = (state, ownProps) => {
  return { term: state.search.term }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault()
      const input = e.target.parentNode.querySelector('input[type="text"]') // uhhhhh
      dispatch(fetchSearchIfAble(input.value))
    }
  }
}

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)

export default SearchForm

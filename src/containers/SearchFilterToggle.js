import { connect } from 'react-redux'
import { toggleImageFilter, toggleAudioFilter } from '../actions'
import SearchFilter from '../components/SearchFilter'

const mapStateToProps = (state, ownProps) => {
  return ownProps.value === 'image'
    ? { checked: state.search.filterImages }
    : { checked: state.search.filterAudio }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault()
      ownProps.value === 'image'
        ? dispatch(toggleImageFilter())
        : dispatch(toggleAudioFilter())
    }
  }
}

const SearchFilterToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter)

export default SearchFilterToggle

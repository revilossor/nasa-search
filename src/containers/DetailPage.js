import { connect } from 'react-redux'
import { fetchDetailIfAble } from '../actions'
import AssetPage from '../components/AssetPage'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.detail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (typeof (ownProps.title) === 'undefined' || ownProps.title === '') {
    dispatch(fetchDetailIfAble(ownProps.match.params.id))
  }
  return {}
}

const DetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetPage)

export default DetailPage

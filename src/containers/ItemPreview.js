import { connect } from 'react-redux'
import { fetchDetailIfAble } from '../actions'
import Preview from '../components/Preview'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault()
      dispatch(fetchDetailIfAble(ownProps.id))
    }
  }
}

const ItemPreview = connect(
  () => ({}),
  mapDispatchToProps
)(Preview)

export default ItemPreview

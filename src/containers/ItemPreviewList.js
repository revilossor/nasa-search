import { connect } from 'react-redux'
import PreviewList from '../components/PreviewList'

const mapStateToProps = (state, ownProps) => {
  return { previews: state.search.items }
}

const ItemPreviewList = connect(
  mapStateToProps
)(PreviewList)

export default ItemPreviewList

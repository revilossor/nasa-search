import {
  REQUEST_DETAIL,
  RECEIVE_DETAIL
} from '../actions'

const initialState = {
  mediaType: '',
  title: '',
  description: '',
  isFetching: false,
  id: '',
  sources: []
}

export default function search (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DETAIL:
      return {
        ...state,
        isFetching: true,
        ...action.item
      }
    case RECEIVE_DETAIL:
      return {
        ...state,
        isFetching: false,
        sources: action.collection.items.map(source => source.href)
      }
    default:
      return state
  }
}

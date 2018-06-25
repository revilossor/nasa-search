import {
  TOGGLE_AUDIO_FILTER,
  TOGGLE_IMAGE_FILTER,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from '../actions'

const initialState = {
  isFetching: false,
  term: '',
  filterImages: false,
  filterAudio: false,
  items: []
}

export default function search (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IMAGE_FILTER:
      return {
        ...state,
        filterImages: !state.filterImages
      }
    case TOGGLE_AUDIO_FILTER:
      return {
        ...state,
        filterAudio: !state.filterAudio
      }
    case REQUEST_SEARCH:
      return {
        ...state,
        isFetching: true,
        term: action.term
      }
    case RECEIVE_SEARCH:
      return {
        ...state,
        isFetching: false,
        items: action.items.filter(item => {
          return Array.isArray(item.data) &&
            item.data.length > 0 &&
            typeof (item.data[0].description) !== 'undefined' &&
            typeof (item.data[0].title) !== 'undefined' &&
            typeof (item.data[0].media_type) !== 'undefined' &&
            typeof (item.data[0].nasa_id) !== 'undefined' &&
            (
              item.data[0].media_type === 'image' ||
              item.data[0].media_type === 'audio'
            )
        }).filter((item, index) => index < 8).map(item => ({
          id: item.data[0].nasa_id,
          description: item.data[0].description,
          title: item.data[0].title,
          mediaType: item.data[0].media_type,
          thumb: item.data[0].media_type === 'image'
            ? item.links[0].href
            : '/nasa-search/speaker-icon.svg'
        }))
      }
    default:
      return state
  }
}

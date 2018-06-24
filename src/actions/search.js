import fetch from 'cross-fetch'

export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export function requestSearch (term) {
  return {
    type: REQUEST_SEARCH,
    term
  }
}

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export function receiveSearch (json) {
  let items
  try {
    items = json.collection.items
  } catch (e) {
    items = []
  }
  return {
    type: RECEIVE_SEARCH,
    items
  }
}

export function getMediaType (filterImages, filterAudio) {
  if (filterImages - filterAudio === 0) { return null } // uhhhh.....
  return filterAudio
    ? 'audio'
    : 'image'
}

function fetchSearch (term) {
  return function (dispatch, getState) {
    dispatch(requestSearch(term))
    const state = getState().search
    let url = `https://images-api.nasa.gov/search?q=${term}`
    const mediaType = getMediaType(state.filterImages, state.filterAudio)
    if (mediaType !== null) {
      url += `&media_type=${mediaType}`
    }
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveSearch(json)))
  }
}

export function fetchSearchIfAble (term) {
  return (dispatch, getState) => {
    const state = getState().search
    return state.isFetching
      ? Promise.resolve()
      : dispatch(fetchSearch(term))
  }
}

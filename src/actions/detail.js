import fetch from 'cross-fetch'

export const REQUEST_DETAIL = 'REQUEST_DETAIL'
export function requestDetail (item) {
  return {
    type: REQUEST_DETAIL,
    item
  }
}

export const RECEIVE_DETAIL = 'RECEIVE_DETAIL'
export function receiveDetail (json) {
  return {
    type: RECEIVE_DETAIL,
    ...json
  }
}

/*
  gets the item from state, or fetches it based on the id if not found in state
*/
function getItem (id, state) {
  const item = state.search.items.find(item => item.id === id)
  return item
    ? Promise.resolve(item)
    : fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`)
      .then(response => response.json())
      .then(json => ({ // handle bad data?
        id,
        description: json.collection.items[0].data[0].description, // WAT?!?!?!
        title: json.collection.items[0].data[0].title,
        mediaType: json.collection.items[0].data[0].media_type
      }))
}

function fetchDetail (id) {
  return function (dispatch, getState) {
    getItem(id, getState()).then(item => {
      dispatch(requestDetail(item))
      return fetch(`https://images-api.nasa.gov/asset/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveDetail(json)))
    })
  }
}

export function fetchDetailIfAble (id) {
  return (dispatch, getState) => {
    const state = getState().detail
    return state.isFetching
      ? Promise.resolve()
      : dispatch(fetchDetail(id))
  }
}

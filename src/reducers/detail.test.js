import {
  REQUEST_DETAIL,
  RECEIVE_DETAIL
} from '../actions'
import reducer from './detail'

let reducedState

describe('should handle initial state', () => {
  beforeAll(() => {
    reducedState = reducer(undefined, {})
  })

  const initialState = {
    mediaType: '',
    title: '',
    description: '',
    isFetching: false,
    id: '',
    sources: []
  }

  Object.keys(initialState).forEach(key => {
    it(`initialises ${key} to ${JSON.stringify(initialState[key])}`, () => {
      expect(reducedState).toEqual(expect.objectContaining({
        [key]: initialState[key]
      }))
    })
  })
})

describe('should handle REQUEST_DETAIL actions', () => {
  const action = {
    type: REQUEST_DETAIL,
    item: {
      mediaType: 'persian',
      title: 'siamese',
      desctiption: 'bengal',
      id: 'siberian'
    }
  }

  beforeAll(() => {
    reducedState = reducer({ isFetching: false }, action)
  })

  it('sets isFetching to true', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        isFetching: true
      })
    )
  })

  Object.keys(action.item).forEach(key => {
    it(`sets ${key} correctly`, () => {
      expect(reducedState[key]).toBe(action.item[key])
    })
  })
})

describe('should handle RECEIVE_DETAIL actions', () => {
  const action = {
    type: RECEIVE_DETAIL,
    collection: {
      items: [
        'cold porridge',
        'warm porridge',
        'hot porridge'
      ]
    }
  }

  beforeAll(() => {
    reducedState = reducer({ isFetching: true }, action)
  })

  it('sets isFetching to false', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        isFetching: false
      })
    )
  })

  it('sets sources correctly', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        sources: action.collection.items
      })
    )
  })
})

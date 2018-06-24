import {
  TOGGLE_IMAGE_FILTER,
  TOGGLE_AUDIO_FILTER,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from '../actions'
import reducer from './search'

let reducedState

describe('should handle initial state', () => {
  beforeAll(() => {
    reducedState = reducer(undefined, {})
  })

  const initialState = {
    isFetching: false,
    term: '',
    filterImages: false,
    filterAudio: false,
    items: []
  }

  Object.keys(initialState).forEach(key => {
    it(`initialises ${key} to ${JSON.stringify(initialState[key])}`, () => {
      expect(reducedState).toEqual(expect.objectContaining({
        [key]: initialState[key]
      }))
    })
  })
})

describe('should handle TOGGLE_IMAGE_FILTER actions', () => {
  const action = {
    type: TOGGLE_IMAGE_FILTER
  }

  it('toggles true to false', () => {
    expect(reducer({ filterImages: true }, action)).toEqual(
      expect.objectContaining({
        filterImages: false
      })
    )
  })

  it('toggles false to true', () => {
    expect(reducer({ filterImages: false }, action)).toEqual(
      expect.objectContaining({
        filterImages: true
      })
    )
  })
})

describe('should handle TOGGLE_AUDIO_FILTER actions', () => {
  const action = {
    type: TOGGLE_AUDIO_FILTER
  }

  it('toggles true to false', () => {
    expect(reducer({ filterAudio: true }, action)).toEqual(
      expect.objectContaining({
        filterAudio: false
      })
    )
  })

  it('toggles false to true', () => {
    expect(reducer({ filterAudio: false }, action)).toEqual(
      expect.objectContaining({
        filterAudio: true
      })
    )
  })
})

describe('should handle REQUEST_SEARCH actions', () => {
  const action = {
    type: REQUEST_SEARCH,
    term: '0836 whimper'
  }

  beforeAll(() => {
    reducedState = reducer({ isFetching: false, term: '' }, action)
  })

  it('sets isFetching to true', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        isFetching: true
      })
    )
  })

  it('sets term correctly', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        term: action.term
      })
    )
  })
})

describe('should handle RECEIVE_SEARCH actions', () => {
  const action = {
    type: RECEIVE_SEARCH,
    items: [{
      data: [{
        nasa_id: 'space...',
        description: 'the',
        title: 'final frontier',
        media_type: 'image'
      }],
      links: [
        { href: 'thumb' }
      ]
    }]
  }

  beforeAll(() => {
    reducedState = reducer({ isFetching: true, items: [] }, action)
  })

  it('sets isFetching to false', () => {
    expect(reducedState).toEqual(
      expect.objectContaining({
        isFetching: false
      })
    )
  })

  it('sets a max of 8 results', () => {
    const action = {
      type: RECEIVE_SEARCH,
      items: []
    }
    for (let i = 0; i < 20; i++) {
      action.items.push({
        data: [{
          nasa_id: 'may the',
          description: 'force be',
          title: 'with you',
          media_type: 'image'
        }],
        links: [
          { href: 'thumb' }
        ]
      })
    }
    expect(reducer({ items: [] }, action).items.length).toBe(8)
  })

  describe('sets properties in items correctly', () => {
    const expected = {
      id: 'space...',
      description: 'the',
      title: 'final frontier',
      mediaType: 'image'
    }

    Object.keys(expected).forEach(key => {
      it(key, () => {
        expect(reducedState.items[0][key]).toBe(expected[key])
      })
    })
  })

  it('skips items that have unexpected format', () => {
    const action = {
      type: RECEIVE_SEARCH,
      items: [
        {
          data: [{
            nasa_id: 'only',
            description: 'going',
            title: 'forwards',
            media_type: 'image'
          }],
          links: [
            { href: 'thumb' }
          ]
        },
        {
          weird: 'format'
        },
        {
          data: [{
            nasa_id: 'cos we',
            description: 'cant find',
            title: 'reverse',
            media_type: 'audio'
          }],
          links: [
            { href: 'thumb' }
          ]
        }
      ]
    }
    expect(reducer({ items: [] }, action)).toEqual(expect.objectContaining({
      items: [
        {
          id: 'only',
          description: 'going',
          title: 'forwards',
          mediaType: 'image',
          thumb: expect.anything()
        },
        {
          id: 'cos we',
          description: 'cant find',
          title: 'reverse',
          mediaType: 'audio',
          thumb: expect.anything()
        }
      ]
    }))
  })

  it('ignores items of unsupported media types', () => {
    const action = {
      type: RECEIVE_SEARCH,
      items: [
        {
          data: [{
            nasa_id: 'seek',
            description: 'out',
            title: 'new life',
            media_type: 'paper mache'
          }]
        },
        {
          data: [{
            nasa_id: 'and',
            description: 'new',
            title: 'civilisations',
            media_type: 'baloon animal'
          }]
        }
      ]
    }
    expect(reducer({ items: [] }, action)).toEqual(expect.objectContaining({
      items: []
    }))
  })
})

import * as actions from './search'

describe('requestSearch should create REQUEST_SEARCH action', () => {
  const term = 'catgif'

  let action

  beforeAll(() => {
    action = actions.requestSearch(term)
  })

  it('correct type', () => {
    expect(action).toEqual(expect.objectContaining({
      type: actions.REQUEST_SEARCH
    }))
  })

  it('correct term', () => {
    expect(action).toEqual(expect.objectContaining({ term }))
  })
})

describe('receiveSearch should create RECEIVE_SEARCH action', () => {
  const items = [ 'pizza', 'cats', 'in', 'space' ]

  let action

  beforeAll(() => {
    action = actions.receiveSearch({
      collection: { items }
    })
  })

  it('correct type', () => {
    expect(action).toEqual(expect.objectContaining({
      type: actions.RECEIVE_SEARCH
    }))
  })

  it('correct items', () => {
    expect(action).toEqual(expect.objectContaining({ items }))
  })

  it('if json from api is in unexpected format, return empty array for items', () => {
    expect(actions.receiveSearch({ unexpected: 'struct' })).toEqual(expect.objectContaining({
      items: []
    }))
  })
})

describe('getMediaType', () => {
  const assertions = [
    { images: true, audio: true, expect: null },
    { images: true, audio: false, expect: 'image' },
    { images: false, audio: true, expect: 'audio' },
    { images: false, audio: false, expect: null }
  ]

  assertions.forEach(assertion => {
    it(`if images filter is ${assertion.images} and audio filter is ${assertion.audio} mediaType should be ${assertion.expect}`, () => {
      expect(actions.getMediaType(assertion.images, assertion.audio)).toBe(assertion.expect)
    })
  })
})

import * as actions from './detail'

describe('requestDetail should create REQUEST_DETAIL action', () => {
  const item = {
    mediaType: 'persian',
    title: 'siamese',
    desctiption: 'bengal',
    id: 'siberian'
  }

  let action

  beforeAll(() => {
    action = actions.requestDetail(item)
  })

  it('correct type', () => {
    expect(action).toEqual(expect.objectContaining({
      type: actions.REQUEST_DETAIL
    }))
  })

  describe('correct item', () => {
    Object.keys(item).forEach(key => {
      it(`correct ${key}`, () => {
        expect(action.item).toEqual(expect.objectContaining({ [key]: item[key] }))
      })
    })
  })
})

describe('receiveDetail should create RECEIVE_DETAIL action', () => {
  const json = {
    collection: {
      items: [ 'i', 'can', 'haz', 'cheezburger' ]
    }
  }

  let action

  beforeAll(() => {
    action = actions.receiveDetail(json)
  })

  it('correct type', () => {
    expect(action).toEqual(expect.objectContaining({
      type: actions.RECEIVE_DETAIL
    }))
  })

  it('correct collection', () => {
    expect(action).toEqual(expect.objectContaining(json))
  })
})

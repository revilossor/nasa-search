import * as actions from './index'

const assertions = [
  'TOGGLE_IMAGE_FILTER',
  'toggleImageFilter',
  'TOGGLE_AUDIO_FILTER',
  'toggleAudioFilter',
  'REQUEST_SEARCH',
  'requestSearch',
  'RECEIVE_SEARCH',
  'receiveSearch',
  'fetchSearchIfAble',
  'REQUEST_DETAIL',
  'requestDetail',
  'RECEIVE_DETAIL',
  'receiveDetail',
  'fetchDetailIfAble'
]

assertions.forEach(assertion => {
  it(`exports ${assertion}`, () => {
    expect(actions[assertion]).toBeDefined()
  })
})

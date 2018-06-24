import * as actions from './filters'

it('toggleImageFilter should create TOGGLE_IMAGE_FILTER action', () => {
  expect(actions.toggleImageFilter()).toEqual({
    type: actions.TOGGLE_IMAGE_FILTER
  })
})

it('toggleAudioFilter should create TOGGLE_AUDIO_FILTER action', () => {
  expect(actions.toggleAudioFilter()).toEqual({
    type: actions.TOGGLE_AUDIO_FILTER
  })
})

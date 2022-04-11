import deepFreeze from 'deep-freeze'
import reviewCounterReducer from './reviewCounter'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING',
      body: undefined
    }

    const newState = reviewCounterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
      
    const action = {
      type: 'GOOD',
      body: {
        good: 1,
        ok: 0,
        bad: 0
      }
    }
    const state = initialState

    deepFreeze(state)
    const newState = reviewCounterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})
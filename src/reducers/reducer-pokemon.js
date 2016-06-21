import { FETCH_POKEMON, MOVE_POKEMON } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POKEMON:
      if (!action.payload.data.detail) {
        return [action.payload.data, ...state]
      }
    case MOVE_POKEMON:
      var toBeMoved = state.slice(action.payload)
      var newState = state.slice(0)
      newState.splice(action.payload, 1)
      var finalState = [toBeMoved[0], ...newState]
      return finalState
  }
  return state
}

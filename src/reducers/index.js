import { combineReducers } from 'redux'
import PokemonReducer from './reducer-pokemon'

const rootReducer = combineReducers({
  pokemon: PokemonReducer
})

export default rootReducer

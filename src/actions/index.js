import axios from 'axios'

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const FETCH_POKEMON = 'FETCH_POKEMON'

export function fetchPokemon (pokemon) {
  const url = `${ROOT_URL}${pokemon}`.toLowerCase()
  const request = axios.get(url)
  
  return {
    type: FETCH_POKEMON,
    payload: request
  }
}

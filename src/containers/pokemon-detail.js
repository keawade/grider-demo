import React, {Component} from 'react'

import Search from '../components/search'
import pokemonList from '../pokemon'

const ITEMS = pokemonList
const KEYS = ['name']
const SEARCH_KEY = 'name'

class PokemonDetail extends Component {
  constructor(props) {
    super(props)
    console.log(pokemonList)
  }

  render() {
    return (
      <Search items={ITEMS} keys={KEYS} searchKey={SEARCH_KEY} />
    )
  }
}

export default PokemonDetail

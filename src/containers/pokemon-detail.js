import React, {Component} from 'react'

import Search from '../components/search'

const ITEMS = [
  {"id":1,"name":"bulbasaur"},
  {"id":2,"name":"ivysaur"},
  {"id":3,"name":"venusaur"},
  {"id":4,"name":"charmander"},
  {"id":5,"name":"charmeleon"},
  {"id":6,"name":"charizard"},
  {"id":7,"name":"squirtle"},
  {"id":8,"name":"wartortle"},
  {"id":9,"name":"blastoise"}
]
const KEYS = ['name']
const SEARCH_KEY = 'name'

class PokemonDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Search items={ITEMS} keys={KEYS} searchKey={SEARCH_KEY} />
    )
  }
}

export default PokemonDetail

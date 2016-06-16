import React, { Component } from 'react'
import SearchBar from '../containers/search-bar'
import PokemonList from '../containers/pokemon-list'

export default class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <PokemonList />
      </div>
    )
  }
}

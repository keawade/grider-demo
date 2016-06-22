import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../actions/index'

import { findKey } from 'lodash'
import { toTitleCase } from '../helpers'
import pokemonList from '../pokemon'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.selectItem = this.selectItem.bind(this)
  }

  componentDidMount () {
    $('#pokemon-search').dropdown()
    this.props.fetchPokemon(Math.floor(Math.random() * (pokemonList.length + 1)))
  }

  selectItem (event) {
    document.getElementById('detail-loader').className = ''
    this.props.fetchPokemon(parseInt(findKey(pokemonList, ['name', event.target.value]), 10) + 1)
  }

  generateList (pokemon) {
    return (
      <option key={pokemon.id} value={pokemon.name}>{toTitleCase(pokemon.name)}</option>
    )
  }

  render () {
    return (
      <select className='ui fluid search selection dropdown' id='pokemon-search' onChange={this.selectItem}>
        <option value=''>Search for a Pokémon!</option>
        {pokemonList.map(this.generateList)}
      </select>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

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
  }

  selectItem (event) {
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
        <option value=''>Search for a Pokemon!</option>
        {pokemonList.map(this.generateList)}
      </select>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

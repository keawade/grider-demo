import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../actions/index'

import pokemonList from '../pokemon'

const ITEMS = pokemonList
const KEYS = ['name']
const SEARCH_KEY = 'name'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.generateList = this.generateList.bind(this)
  }

  componentDidMount () {
    $('#pokemon-search').dropdown()
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchPokemon(this.state.term)
    this.setState({ term: '' })
  }

  generateList (pokemon) {
    return (
      <option key={pokemon.id} value={pokemon.name}>{pokemon.name}</option>
    )
  }

  render () {
    return (
      <select className='ui fluid search selection dropdown' id='pokemon-search'>
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

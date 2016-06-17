import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../actions/index'

import Search from '../components/search'
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
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchPokemon(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <Search items={ITEMS} keys={KEYS} searchKey={SEARCH_KEY} />
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

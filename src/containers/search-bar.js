import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../actions/index'

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
        <div className='ui icon input fluid'>
          <input placeholder='Search for a Pokemon!' value={this.state.term} onChange={this.onInputChange} />
          <i className='search icon'></i>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

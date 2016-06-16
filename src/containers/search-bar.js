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
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input placeholder='Location' className='form-control' value={this.state.term} onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button className='btn btn-primary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
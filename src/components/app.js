import React, { Component } from 'react'
import SearchBar from '../containers/search-bar'

export default class App extends Component {
  render () {
    return (
      <div className='ui container'>
        <SearchBar />
        {this.props.children}
      </div>
    )
  }
}

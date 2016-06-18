import React, {Component} from 'react'
import { connect } from 'react-redux'
import { isEmpty } from '../helpers.js'
import SearchBar from '../containers/search-bar'
import PokemonDetail from '../containers/pokemon-detail'

class App extends Component {
  constructor(props) {
    super(props)
    this.renderContent = this.renderContent.bind(this)
  }

  renderContent() {
    if (isEmpty(this.props.pokemon)) {
      return (
        <div className='ui segment'>
          <div className='ui active inverted dimmer'>
            <div className='ui loader'></div>
          </div>
          <p>This is a test</p>
        </div>
      )
    } else {
      return (
        <PokemonDetail />
      )
    }
  }

  render () {
    return (
      <div className='ui container'>
        <SearchBar />
        <PokemonDetail />
        <div className='ui segment'>
          <h3 className='header'>Thanks</h3>
          <p>Thanks to <a href='http://phalt.co/'>Paul Hallett</a> and <a href='http://pokeapi.co/'>Pokéapi</a> for the data resouces.</p>
          <p>Thanks to <a href='http://semantic-ui.com/'>Semantic UI</a> for the great development framework.</p>
          <p>Thanks to <a href='http://www.pokemon.com/'>Nintendo</a> for the artwork. I don't own any of it, I'm just made this because I love the games and wanted a nice interface for the data. (Please don't sue me)</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { Pokémon: state.pokemon }
}

export default connect(mapStateToProps)(App)

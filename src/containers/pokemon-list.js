import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class PokemonList extends Component {
  renderPokemon (pokemonData) {
    const name = pokemonData.forms.map(form => form.name)
    const types = pokemonData.types.map(type => type.type.name)
    const spritePath = pokemonData.sprites.front_default
    console.log(types)

    return (
      <tr key={name}>
        <td>
          <img src={spritePath} />
          {name}
        </td>
        <td>{types[0]} | {types[1]}</td>
        <td>{name}</td>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
            <th>Another category</th>
            <th>Another category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pokemon.map(this.renderPokemon)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps (state) {
  return { pokemon: state.pokemon }
}

export default connect(mapStateToProps)(PokemonList)

import React, {Component} from 'react'
import { connect } from 'react-redux'

class PokemonDetail extends Component {
  constructor(props) {
    super(props)

    this.renderPokemon = this.renderPokemon.bind(this)
    this.renderType = this.renderType.bind(this)
  }
  
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <span className={style} >{tagContent}</span>
    )
  }
  
  renderPokemon (pokemonData) {
    if(pokemonData) {
      const name = toTitleCase(pokemonData.forms[0].name)
      const types = pokemonData.types.map(thing => thing.type.name)
      const spritePath = pokemonData.sprites.front_default

      return (
        <tr key={name}>
          <td>
            <div>{name}</div>
            <img src={spritePath} />
          </td>
          <td>
            {types.map(this.renderType)}
          </td>
          <td>{name}</td>
          <td>{name}</td>
        </tr>
      )
    }
  }

  render() {
    return (
      <table className='ui large striped table '>
        <thead>
          <tr>
            <th>Pokémon</th>
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

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function mapStateToProps (state) {
  return { pokemon: state.pokemon }
}

export default connect(mapStateToProps)(PokemonDetail)

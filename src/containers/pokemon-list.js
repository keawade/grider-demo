import React, {Component} from 'react'
import { connect } from 'react-redux'

class PokemonList extends Component {
  constructor(props) {
    super(props)

    this.renderPokemon = this.renderPokemon.bind(this)
    this.renderType = this.renderType.bind(this)
  }
  
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <div className={style} >{tagContent}</div>
    )
  }
  
  renderPokemon (pokemonData) {
    const name = pokemonData.forms[0].name
    const types = pokemonData.types.map(thing => thing.type.name)
    const spritePath = pokemonData.sprites.front_default

    return (
      <tr key={name}>
        <td>
          <img src={spritePath} />
          {name}
        </td>
        <td>
          {types.map(this.renderType)}
        </td>
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

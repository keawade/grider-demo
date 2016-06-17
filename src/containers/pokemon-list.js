import React, {Component} from 'react'
import { connect } from 'react-redux'

class PokemonList extends Component {
  constructor(props) {
    super(props)

    //this.renderPokemon = this.renderPokemon.bind(this)
    this.renderType = this.renderType.bind(this)
  }
  
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <span key={tagContent} className={style} >{tagContent}</span>
    )
  }

  render() {
    console.log(this.props.pokemon)
    if (isEmpty(this.props.pokemon)) {
      var name = ''
      var types = []
      var spritePath = ''
    } else {
      var name = toTitleCase(this.props.pokemon.forms[0].name)
      var types = this.props.pokemon.types.map(thing => thing.type.name)
      var spritePath = this.props.pokemon.sprites.front_default
    }
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
          <tr>
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
        </tbody>
      </table>
    )
  }
}

function isEmpty(object) {
  for(var key in object) {
    if(object.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function mapStateToProps (state) {
  return { pokemon: state.pokemon }
}

export default connect(mapStateToProps)(PokemonList)

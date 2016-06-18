import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toTitleCase, isEmpty } from '../helpers.js'
import leftPad from 'left-pad'
import pokemonList from '../pokemon'


class PokemonDetail extends Component {
  constructor(props) {
    super(props)
    this.renderType = this.renderType.bind(this)
  }
  
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <div className='ui center' key={tagContent}>
        <span className={style} >{tagContent}</span>
      </div>
    )
  }

  render() {
    var id
    var name = ''
    var types = []
    var spritePath = ''
    var display = 'ui segment poke-hidden'

    if (!isEmpty(this.props.pokemon)) {
      id = leftPad(this.props.pokemon.id, 3, 0)
      name = toTitleCase(pokemonList[parseInt(id, 10) - 1].name)
      types = this.props.pokemon.types.map(thing => thing.type.name)
      spritePath = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
      display = 'ui segment'
    }
    return (
      <div className={display}>
        <h1 className='ui center aligned dividing header'>{name}</h1>
        <div className='ui two column grid'>
          <div className='row'>
            <div className='column'>
              <img src={spritePath} />
            </div>
            <div className='column'>
              {types.map(this.renderType)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { pokemon: state.pokemon }
}

export default connect(mapStateToProps)(PokemonDetail)

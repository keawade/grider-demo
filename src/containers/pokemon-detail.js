import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toTitleCase, isEmpty } from '../helpers.js'
import leftPad from 'left-pad'
import pokemonList from '../pokemon'
import pokemonTypes from '../pokemon-types'


class PokemonDetail extends Component {
  constructor(props) {
    super(props)
    this.renderType = this.renderType.bind(this)
    this.renderWeaknesses = this.renderWeaknesses.bind(this)
  }
  
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <span className={style} key={tagContent} >{tagContent}</span>
    )
  }

  renderWeaknesses(types) {
    let weaknesses = []
    types.map(function(type) {
      pokemonTypes.map(function(against) {
        if (against.damage_relations.double_damage_to.indexOf(type) > -1) {
          if (weaknesses.indexOf(against.name) == -1) {
            weaknesses.push(against.name)
          }
        }
      })
    })
    return weaknesses.map(this.renderType)
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
        <h1 className='ui center aligned dividing header'>#{id} - {name}</h1>
        <div className='ui two column divided grid'>
          <div className='row'>
            <div className='column'>
              <img src={spritePath} />
            </div>
            <div className='column'>
              <h3 className='ui header'>Description</h3>
              <p>Super cool dude.</p>
              <h3 className='ui header'>Type</h3>
              {types.map(this.renderType)}
              <h3 className='ui header'>Weaknesses</h3>
              <p>This is currently wrong</p>
              {this.renderWeaknesses(types)}
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

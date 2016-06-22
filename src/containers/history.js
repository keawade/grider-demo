import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { movePokemon } from '../actions/index'
import { toTitleCase, isEmpty } from '../helpers.js'
import leftPad from 'left-pad'
import pokemonList from '../pokemon'
import pokemonTypes from '../pokemon-types'
import pokemonTypeColors from '../pokemon-types-colors'

class History extends Component {
  constructor(props) {
    super(props)
    this.renderType = this.renderType.bind(this)
    this.renderListItem = this.renderListItem.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }
  renderType(type) {
    const tagContent = type.toUpperCase()
    const primaryColor = { color: pokemonTypeColors[type].primary }
    const secondaryColor = { color: pokemonTypeColors[type].secondary }
    return (
      <i key={tagContent} className="circle icon" style={primaryColor}></i>
    )
  }
  calculateStrengths(types) {
    let strengths = {}
    if (types.length == 2) {
      strengths = {
        normal: pokemonTypes.normal[types[0]] * pokemonTypes.normal[types[1]],
        fire: pokemonTypes.fire[types[0]] * pokemonTypes.fire[types[1]],
        water: pokemonTypes.water[types[0]] * pokemonTypes.water[types[1]],
        electric: pokemonTypes.electric[types[0]] * pokemonTypes.electric[types[1]],
        grass: pokemonTypes.grass[types[0]] * pokemonTypes.grass[types[1]],
        ice: pokemonTypes.ice[types[0]] * pokemonTypes.ice[types[1]],
        fighting: pokemonTypes.fighting[types[0]] * pokemonTypes.fighting[types[1]],
        poison: pokemonTypes.poison[types[0]] * pokemonTypes.poison[types[1]],
        ground: pokemonTypes.ground[types[0]] * pokemonTypes.ground[types[1]],
        flying: pokemonTypes.flying[types[0]] * pokemonTypes.flying[types[1]],
        psychic: pokemonTypes.psychic[types[0]] * pokemonTypes.psychic[types[1]],
        bug: pokemonTypes.bug[types[0]] * pokemonTypes.bug[types[1]],
        rock: pokemonTypes.rock[types[0]] * pokemonTypes.rock[types[1]],
        ghost: pokemonTypes.ghost[types[0]] * pokemonTypes.ghost[types[1]],
        dragon: pokemonTypes.dragon[types[0]] * pokemonTypes.dragon[types[1]],
        dark: pokemonTypes.dark[types[0]] * pokemonTypes.dark[types[1]],
        steel: pokemonTypes.steel[types[0]] * pokemonTypes.steel[types[1]],
        fairy:  pokemonTypes.fairy[types[0]] * pokemonTypes.fairy[types[1]]
      }
    } else {
      strengths = {
        normal: pokemonTypes.normal[types[0]],
        fire: pokemonTypes.fire[types[0]],
        water: pokemonTypes.water[types[0]],
        electric: pokemonTypes.electric[types[0]],
        grass: pokemonTypes.grass[types[0]],
        ice: pokemonTypes.ice[types[0]],
        fighting: pokemonTypes.fighting[types[0]],
        poison: pokemonTypes.poison[types[0]],
        ground: pokemonTypes.ground[types[0]],
        flying: pokemonTypes.flying[types[0]],
        psychic: pokemonTypes.psychic[types[0]],
        bug: pokemonTypes.bug[types[0]],
        rock: pokemonTypes.rock[types[0]],
        ghost: pokemonTypes.ghost[types[0]],
        dragon: pokemonTypes.dragon[types[0]],
        dark: pokemonTypes.dark[types[0]],
        steel: pokemonTypes.steel[types[0]],
        fairy:  pokemonTypes.fairy[types[0]]
      }
    }
    return strengths
  }

  selectItem (event) {
    console.log(event.target)
    this.props.movePokemon(parseInt(event.target.id, 10) + 1)
    window.scrollTo(0,0)
  }

  renderListItem(itemDetails, i) {
    const index = i
    const id = leftPad(itemDetails.id, 3, 0)
    const name = toTitleCase(pokemonList[parseInt(id, 10) - 1].name)
    const types = itemDetails.types.map(thing => thing.type.name)
    const spritePath = `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    const strengths = this.calculateStrengths(types)
    
    return (
      <div key={id} className='ui column'>
        <a id={index} onClick={this.selectItem}>
          <div className='ui card' id={index}>
            <div className='image' id={index}>
              <img src={spritePath} id={index} />
            </div>
            <div className='content' id={index}>
              <div className='header' id={index}>{id} - {name}</div>
              <div className='description' id={index}>
                {types.map(this.renderType)}
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  render() {
    if (this.props.pokemon.length <= 1) {
      return <div className='poke-hidden' />
    }
    const cardList = this.props.pokemon.slice(1)

    return (
      <div>
        <div className='ui divider' />
        <div className='ui four column grid'>
          {cardList.map(this.renderListItem)}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { pokemon: state.pokemon }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ movePokemon }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(History)

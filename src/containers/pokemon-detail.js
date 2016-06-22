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
    this.renderResistances = this.renderResistances.bind(this)
    this.renderImmunities = this.renderImmunities.bind(this)
  }
  componentWillUpdate () {
    if(document.getElementById('detail-loader')) {
      document.getElementById('detail-loader').className = 'poke-hidden'
    }
  }
  renderType(type) {
    const style = `type ${type}`
    const tagContent = type.toUpperCase()
    return (
      <span className={style} key={tagContent} >{tagContent}</span>
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
  renderWeaknesses(strengths) {
    let weaknesses = []
    for(let item in strengths) {
      if(strengths[item] >= 2) {
        weaknesses.push(item)
      }
    }
    return (
      <div>
        {weaknesses.map(this.renderType)}
      </div>
    )
  }
  renderResistances(strengths) {
    let resistances = []
    for(let item in strengths) {
      if(0.25 == strengths[item] || strengths[item] == 0.5) {
        resistances.push(item)
      }
    }
    return (
      <div>
        {resistances.map(this.renderType)}
      </div>
    )
  }
  renderImmunities(strengths) {
    let immunities = []
    for(let item in strengths) {
      if(strengths[item] == 0) {
        immunities.push(item)
      }
    }
    return (
      <div>
        {immunities.map(this.renderType)}
      </div>
    )
  }
  render() {
    var id
    var name = ''
    var types = []
    var spritePath = ''

    if (!isEmpty(this.props.pokemon[0])) {
      id = leftPad(this.props.pokemon[0].id, 3, 0)
      name = toTitleCase(pokemonList[parseInt(id, 10) - 1].name)
      types = this.props.pokemon[0].types.map(thing => thing.type.name)
      spritePath = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    } else {
      return (
        <div className='ui basic segment poke-height-mod'>
          <div className='ui active text loader'>Loading</div>
        </div>
      )
    }

    var strengths = this.calculateStrengths(types)

    return (
      <div className='ui segments'>
        <div className='ui center aligned segment'>
          <h1 className='ui huge header'>#{id} - {name}</h1>
        </div>
        <div className='ui segment'>
          <div className='ui two column divided grid'>
            <div className='row'>
              <div className='column'>
                <img src={spritePath} />
              </div>
              <div className='column'>
                <h3 className='ui dividing header'>Type</h3>
                {types.map(this.renderType)}
                <h3 className='ui dividing header'>Weaknesses</h3>
                {this.renderWeaknesses(strengths)}
                <h3 className='ui dividing header'>Resistances</h3>
                {this.renderResistances(strengths)}
                <h3 className='ui dividing header'>Immunities</h3>
                {this.renderImmunities(strengths)}
              </div>
            </div>
          </div>
        </div>
        <div className='ui center aligned segment'>
          Fork me on <a href='https://github.com/keawade/pokedata' target='_blank'>GitHub</a>
        </div>
        <div className='poke-hidden' id='detail-loader'>
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
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

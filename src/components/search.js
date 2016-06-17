/**
 * Search component
 * A simple search component.
**/
import React, { Component, PropTypes } from 'react'

class Search extends Component {

  static get defaultProps () {
    return {
      ItemElement: 'a'
    }
  }

  static get propTypes () {
    return {
      items: PropTypes.array.isRequired,
      searchKey: PropTypes.string,
      keys: PropTypes.array,
      placeholder: PropTypes.string,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
      ItemElement: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
      ])
    }
  }

  constructor (props) {
    super(props)
    this.state = { matchingItems: [] }
  }

  changeInput (e) {
    let searchValue = this.refs.searchInput.value

    if (searchValue) {
      this.refs.autocomplete.className = 'results search-open'

      let result = SearchItemInArrayObjects(this.props.items, searchValue, this.props.searchKey)

      this.setState({matchingItems: result})

      if (this.props.onChange !== undefined) {
        this.props.onChange(e, result)
      }
    }
    else {
      this.refs.autocomplete.className = 'results search-closed'
    }
  }

  selectAutoComplete (e) {
    this.refs.autocomplete.className = 'results search-closed'
    let result
    if (e.currentTarget.children.length) {
      result = e.currentTarget.children[0].innerHTML
    } else {
      result = e.currentTarget.innerHTML
    }
    this.refs.searchInput.value = result
    var search = new Event('submit')
    this.refs.searchInput.parentElement.parentElement.parentElement.dispatchEvent(search)

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, result)
    }
  }

  render () {
    const { ItemElement } = this.props

    let items = this.state.matchingItems.map((item, i) => {
      return (
        <div key={i}
            className='item'
            onClick={this.selectAutoComplete.bind(this)}>
          {
            this.props.keys.map((itemKey, j) => {
              return (
                <ItemElement key={j}>
                { item[itemKey] }
                </ItemElement>
              )
            })
          }
        </div>
      )
    })

    return (
      <div>
        <div className='ui icon input fluid'>
          <input type='text' placeholder='Search for a Pokémon!' ref='searchInput' onKeyUp={this.changeInput.bind(this)} />
          <i className='search icon'></i>
        </div>
        <div className='results search-closed' ref='autocomplete'>
          <div className='ui segment'>
            <div className='ui relaxed selection list'>
              {items}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Search

var SearchItemInArrayObjects = function (items, input, searchKey) {
  if (input.trim() === '' || searchKey === undefined) {
    return []
  }
  var reg = new RegExp('\\b' + input, 'i')

  return items.filter(function (item) {
    if (reg.test(item[searchKey])) {
      return item
    }
  })
}
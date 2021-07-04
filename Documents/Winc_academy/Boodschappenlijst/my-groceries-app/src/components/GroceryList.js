import React, { Component } from 'react'
import List from './List.js'

class GroceryList extends Component {
  render () {
    return (
      <List
        name={this.props.title}
        key={this.props.id}
        id={this.props.id}
        handleClickGroceryItem={this.props.handleClickGroceryItem}
      />
    )
  }
}

export default GroceryList

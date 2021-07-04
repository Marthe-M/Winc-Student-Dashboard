import React, { Component } from 'react'
import ListItem from './ListItem.js'

class List extends Component {
  render () {
    return (
      <ListItem
        key={this.props.id}
        id={this.props.id}
        title={this.props.name}
        className='list-item'
        value={this.props.name}
        amount={this.props.amount}
        handleClickGroceryItem={this.props.handleClickGroceryItem}
      />
    )
  }
}

export default List

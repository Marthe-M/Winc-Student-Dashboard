import React, { Component } from 'react'
import List from './List.js'

class ShoppingCart extends Component {
  render () {
    return (
      <List
        name={this.props.title}
        key={this.props.id}
        id={this.props.id}
        amount={this.props.amount}
      />
    )
  }
}

export default ShoppingCart

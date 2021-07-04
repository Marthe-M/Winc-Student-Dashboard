import React, { Component } from 'react'
import GroceryList from './GroceryList.js'
import GroceryForm from './GroceryForm.js'
import ShoppingCart from './ShoppingCart.js'

class Container extends Component {
  constructor () {
    super()
    this.state = {
      groceryItems: [
        { id: 1, title: 'Appels' },
        { id: 2, title: 'Pak melk' },
        { id: 3, title: 'Pindakaas' }
      ],
      shoppingItems: [
        { id: 1, title: 'Kaas', amount: 1 },
        { id: 2, title: 'Koffie', amount: 2 },
        { id: 3, title: 'Brood', amount: 3 }
      ]
    }
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.handleButtonClicked = this.handleButtonClicked.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }

  handleClickGroceryItem (title) {
    if (this.state.shoppingItems.some(item => item.title === title)) {
      const index = this.state.shoppingItems.findIndex(
        item => item.title === title
      )
      console.log(index)
      this.setState(prevState => {
        const newShoppingItems = [...prevState.shoppingItems]
        newShoppingItems[index] = {
          ...newShoppingItems[index],
          amount: prevState.shoppingItems[index].amount + 1
        }
        const newState = { ...prevState, shoppingItems: newShoppingItems }
        console.log(newState)
        return newState
      })
    } else {
      this.setState(prevState => {
        const newShoppingItems = [...prevState.shoppingItems]
        const newItemInput = title
        const newItemId = this.state.shoppingItems.length + 1
        const obj = { id: newItemId, title: newItemInput, amount: 1 }
        newShoppingItems.push(obj)
        const newState = { ...prevState, shoppingItems: newShoppingItems }
        console.log(newState)
        return newState
      })
    }
  }

  handleButtonClicked (e) {
    if (e) e.preventDefault()
    const [input] = e.target.children
    console.log('Nieuwe input is', input.value)
    this.setState(prevState => {
      const newGroceryItems = [...prevState.groceryItems]
      const newItemInput = input.value
      const newItemId = this.state.groceryItems.length + 1
      const obj = { id: newItemId, title: newItemInput }
      newGroceryItems.push(obj)
      const newState = { ...prevState, groceryItems: newGroceryItems }
      console.log(newState)
      return newState
    })
  }

  deleteList () {
    this.setState(prevState => {
      const newShoppingItems = []
      const newState = { ...prevState, shoppingItems: newShoppingItems }
      return newState
    })
  }

  render () {
    return (
      <div className='body-container'>
        <div className='grocery-container'>
          <h2>Boodschappenlijst</h2>
          <GroceryForm handleButtonClicked={this.handleButtonClicked} />
          <ul>
            {this.state.groceryItems.map(items => (
              <GroceryList
                key={items.id}
                id={items.id}
                title={items.title}
                handleClickGroceryItem={this.handleClickGroceryItem}
              />
            ))}
          </ul>
        </div>
        <div className='shopping-container'>
          <h2>Winkelmand</h2>
          <button type='reset' onClick={this.deleteList}>
            Boodschappenlijst legen
          </button>
          <ul>
            {this.state.shoppingItems.map(items => (
              <ShoppingCart
                key={items.id}
                id={items.id}
                title={items.title}
                amount={items.amount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Container

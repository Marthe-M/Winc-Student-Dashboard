import React from 'react'

function GroceryForm (props) {
  return (
    <div className='grocery-form'>
      <form onSubmit={props.handleButtonClicked}>
        <input
          className='add-item-input'
          type='text'
          placeholder='Voeg nieuw item toe'
        />
        <button type='submit'>Toevoegen</button>
      </form>
    </div>
  )
}

export default GroceryForm

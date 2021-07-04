import React from 'react'

function ListItem (props) {
  if (props.amount === undefined) {
    return (
      <li
        key={props.id}
        onClick={() => {
          props.handleClickGroceryItem(props.title)
        }}
      >
        {props.title}
      </li>
    )
  } else {
    return (
      <li
        key={props.id}
        onClick={() => {
          props.handleClickGroceryItem(props.title)
        }}
      >
        <p>{props.title}</p>
        <p>Hoeveelheid: {props.amount}</p>
      </li>
    )
  }
}
export default ListItem

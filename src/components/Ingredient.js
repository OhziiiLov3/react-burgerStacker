import React from 'react'

const Ingredient = (props) => {
  return (
    <div>
       <button handleIngredientClick={props.handleIngredientClick}>{props.name}</button>
    </div>
  )
}

export default Ingredient
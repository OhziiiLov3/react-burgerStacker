import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
const ingredientObjects = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];

const ingredients = ingredientObjects.map((ingredientObject, idx)=>{
    return(
        <Ingredient 
        key={` yum ${idx}`}
        name={ingredientObject.name}
        color={ingredientObject.color}
        handleIngredientClick={props.handleIngredientClick}/>
    )
})


  return (
    <div>
        IngredientList
        {ingredients}
    </div>
  )
}

export default IngredientList
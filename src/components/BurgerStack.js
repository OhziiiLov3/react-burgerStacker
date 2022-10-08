import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = (props) => {

    const ingredients = props.clickIngredients.map((ingredient, idx)=>{
        return(
            <Ingredient
            key={`yum ${idx}`}
            name={ingredient.name}/>
        )
    })
  return (
    <div>
      <h1>BurgerStack</h1>
      {ingredients}
    </div>
  );
}

export default BurgerStack
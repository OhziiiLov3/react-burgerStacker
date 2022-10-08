import './App.css';
import './index.css';
import {useEffect, useState  } from "react";
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

function App() {
const [clickedIngredients, setClickedIngredients] = useState([]);

useEffect(()=>{
  console.log(clickedIngredients)
},[clickedIngredients])

const handleIngredientClick = (e) =>{
  // console.log(e.target.innerText);
  setClickedIngredients([...clickedIngredients, {name :e.target.innerText}])
}
  return (
    <div className="App burger-stacker">
     <IngredientList handleIngredientClick={handleIngredientClick}/>
     <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;

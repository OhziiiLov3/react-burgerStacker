import './App.css';
import './index.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

function App() {
  return (
    <div className="App burger-stacker">
     <IngredientList/>
     <BurgerStack/>
    </div>
  );
}

export default App;

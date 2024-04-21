import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'; // Import useState hook

import Layout from './pages/Layout/Layout';
import Pantry from './pages/Pantry/Pantry';
import Scan from './pages/Scan/Scan';
import Recipes from './pages/Recipes/Recipes';

type Ingredient = {
  name: string;
  quantity: number;
  expirationDate: Date;
  weight: number
}

function App() {
  const [pantryIngredients, setPantryIngredients] = useState<Ingredient[]>([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route
            index
            element={<Pantry pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients} />}
          />
          <Route path='scan' element={<Scan pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients}/>} />
          <Route path='recipes' element={<Recipes/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

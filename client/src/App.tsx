import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'; // Import useState hook

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
  const [pantryIngredients, setPantryIngredients] = useState<Ingredient[]>([
    {
        "name": "tomato paste",
        "expirationDate": new Date( "08/19/24"),
        "quantity": 2,
        "weight": 0.5
    },
    {
        "name": "kraft mac n cheese",
        "expirationDate": new Date( "08/19/24"),
        "quantity": 2,
        "weight": 0.5
    },
    {
        "name": "grapes",
        "expirationDate": new Date( "08/19/24"),
        "quantity": 2,
        "weight": 0.5
    },
    {
        "name": "apples",
        "expirationDate": new Date( "08/19/24"),
        "quantity": 2,
        "weight": 0.5
    },
    {
        "name": "orange",
        "expirationDate": new Date( "08/19/24"),
        "quantity": 2,
        "weight": 0.5
    }
])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route
            index
            element={<Pantry pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients} />}
          />
          <Route path='scan' element={<Scan pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients}/>} />
          <Route path='recipes' element={<Recipes pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

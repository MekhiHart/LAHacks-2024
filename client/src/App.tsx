import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout/Layout';
import Pantry from './pages/Pantry/Pantry';
import Scan from './pages/Scan/Scan';
import Recipes from './pages/Recipes/Recipes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Pantry/>} />
          <Route path='scan' element={<Scan/>} />
          <Route path='recipes' element={<Recipes/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import './App.css';

import Layout from './pages/Layout/Layout';
import Pantry from './pages/Pantry/Pantry';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Pantry/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

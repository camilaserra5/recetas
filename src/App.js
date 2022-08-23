import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Recipe from "./pages/Recipe"

function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path="/how" element={<Recipe />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

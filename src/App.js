import React from 'react';

import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"
import Landing from "./pages/Landing"
import Recipe from "./pages/Recipe"

function App() {
    return (
  <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path="/how"/>
          <Route path="recipes/:id" element={<Recipe />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

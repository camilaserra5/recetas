import React from 'react';

import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"
import Landing from "./pages/Landing"
import Recipe from "./pages/Recipe"
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
    return (
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/how"/>
            <Route path="recipes/:id" element={<Recipe />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

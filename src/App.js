import React from 'react';

import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"
import Landing from "./pages/Landing"
import Recipe from "./pages/Recipe"
import ScrollToTop from "./components/ui/ScrollToTop";
import Category from "./pages/Category";
import "./style.css"
function App() {
    return (
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/how"/>
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/category/:id" element={<Category />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

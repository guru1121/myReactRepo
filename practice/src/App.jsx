import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';

export default function App() {
 


  return (
    <Router>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/blogs">Blogs</Link> | 
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
   
    </Routes>
  </Router>
  
  )
}

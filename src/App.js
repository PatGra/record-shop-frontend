import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.js'
import Records from './components/Records.js'
import AddNewRecords from './components/AddNewRecords.js'


function App() {



  return (
    <div className="App">
      <header className="App-header">
      <h1>THE RECORD SHOP</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/addRecords" element={<AddNewRecords />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;

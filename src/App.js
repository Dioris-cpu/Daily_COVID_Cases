import React from 'react';
import './App.css';
import Graph from './components/Graph';
import About from './components/about'
import Navbar from './components/navBar'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <About/>
      <h1>COVID Confirmd Cases Chart</h1>
      <Graph/>
     
    </div>
  );
}

export default App;

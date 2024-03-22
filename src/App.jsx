import React from 'react';
import Header from './Header.jsx';
import Pokedex from './Pokedex.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Pokedex />
    </div>
  );
};

export default App;


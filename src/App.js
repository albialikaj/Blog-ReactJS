import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;

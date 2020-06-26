import React from 'react';

import './App.css';

import Header from './components/Header';

import Hero from './components/Hero';
// import BlogPost from './components/BlogPost';
import Home from './containers/Home';
import About from './containers/About';
import Post from './containers/Post';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">    
        <Header/>
        <Hero />     

        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/post/:postId" component={Post} />
      </div>
    </Router>

  );
}

export default App;

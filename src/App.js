import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './containers/About';
import Post from './containers/Post';
import AllPosts from './components/AllPosts';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import MainPage from './pages';
import PageNotFound from './pages/404';

class App extends Component {
render(){
  return (
    <Router>
      <div className="App">   
      <Header/> 
      <Hero /> 

<div className="container">
<Switch>
        <Route exact path="/" component={MainPage} />
        <Route  path="/about" component={About} />
        <Route exact path="/post/:postId" component={Post} />
        <Route  component={PageNotFound} />
       </Switch>
</div>

      </div>
    </Router>
  );
}
}

export default App;

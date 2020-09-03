import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {carousel} from 'react-responsive-carousel'

class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <Route exact path="/" component = {Home} />
      <Route exact path="/About" component = {About} />
    </div>
    </Router>
  );
 }
}
export default App;
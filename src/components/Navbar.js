import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
          <div className="container">      
      <Link className="navbar-brand" to="#">Top Navbar</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/Contact us">Contact Us</Link>
          </li>
          
          
        </ul>
       
      </div>
      </div>
    </nav>

      );
  }
}

export default Navbar;
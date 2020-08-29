import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Login from './Login';
import '../style.css';

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <img className="card-img-top rounded-circle w200" src="https://firebasestorage.googleapis.com/v0/b/auto-washimatic.appspot.com/o/logo.jpg?alt=media&token=573152dc-6db9-434c-990b-48bef03638c0"
              alt="Logo Image"
            />
          <h3>Auto-Washimatic</h3>
          <p>..Your mobile car detailing solution.</p>
          <NavLink className="a" to="/login">Login/Sign Up</NavLink>
        </header>        
      </div>
    )
  }
}

export default Main;
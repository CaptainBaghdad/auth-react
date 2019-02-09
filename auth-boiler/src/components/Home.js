import React, { Component } from 'react';
import '../css/home.css';
import {Link} from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      
     
      
      <nav>
          <div className="main-nav">
          <Link to="/login" className="login-link">login</Link>
          <Link to="/register" className="register-link">Register</Link>
          </div>
      </nav>

        
       
     
      
    );

  }
}

export default Home;

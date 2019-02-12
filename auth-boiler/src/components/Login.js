import React, { Component } from 'react';
import '../css/login.css';
 
class Login extends Component {
  render() {
    return (
      <center>
      <div className="login-container">
      <h1> Login to your account </h1>
      <form  className="form" onSubmit={this.handleSubmit}> 
          
          Email <input  onChange={this.handleChange} className="form-control" type="text" id="email" name="email"/>
          Password <input onChange={this.handleChange} className="form-control" type="text" id="password" name="password"/>
            <input type="submit" value="submit" className=" form-control btn btn-info"/> 
          </form>
        
       
      </div>
      </center>
    );

  }
}

export default Login;

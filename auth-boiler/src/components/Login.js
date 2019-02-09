import React, { Component } from 'react';



class Login extends Component {
  render() {
    return (
      
      <div className="App">
      <h1> LOGIN to your account </h1>
      <form className="form"> 
          
          Email <input className="form-control" type="text" id="email" name="email"/>
          Password <input className="form-control" type="text" id="password" name="password"/>

          </form>
        
       
      </div>
      
    );

  }
}

export default Login;

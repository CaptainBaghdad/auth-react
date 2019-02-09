import React, { Component } from 'react';



class Register extends Component {
  render() {
    return (
      
      <div className="App">
      <h1>Register</h1>
      <form> 
          Name <input type="text" id="name" name="name"/>
          Email <input type="text" id="email" name="email"/>
          Password <input type="text" id="password" name="password"/>

          </form>

        
       
      </div>
      
    );

  }
}

export default Register;

import React, { Component } from 'react';
import '../css/register.css';



class Register extends Component {
  render() {
    return (
        <center >
      <div className="register-container" >
    
      <h1>Register</h1>

      <form className="form"> 
          Name <input className="form-control" type="text" id="name" name="name"/> <br/>
          Email <input className="form-control" type="text" id="email" name="email"/> <br/>
          Password <input className="form-control" type="text" id="password" name="password"/><br/> <br/> <br/> <br/>
            <input type="submit" value="Submit" className="form-control btn btn-success"/>
          </form>

        
      
      </div>
      </center>
    );

  }
}

export default Register;

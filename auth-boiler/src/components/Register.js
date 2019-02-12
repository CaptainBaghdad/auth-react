import React, { Component } from 'react';
import '../css/register.css';
import {Link} from 'react-router-dom';



class Register extends Component {

  state = {
    name: '',
    email: '',
    password: ''
   
  }
 
 
 handleChange = (e) => {
 
   
 
   this.setState({
     [e.target.id]: e.target.value
   }, () => {console.log(this.state)})
 
 }
 
 handleSubmit = (e) =>{
   e.preventDefault();
   let name= this.state.name;
   let email = this.state.email;
   let password = this.state.password;
 
   fetch('http://localhost:3000/api/v1/users', {
     method: 'POST',
     headers: {
       'Accepts': 'application/json',
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
       name: this.state.name,
       email: this.state.email,
       password: this.state.password
     })
 
     
   })
   .then(res => res.json())
   .then(data => console.log(`this is the data from the server ${data}`))
 
 }
 








  render() {
    return (
        <center >
      <div className="register-container" >
    
      <h1>Register</h1>

      <form  onSubmit={this.handleSubmit} className="form"> 
          Name <input onChange={this.handleChange} className="form-control" type="text" id="name" name="name"/> <br/>
          Email <input onChange={this.handleChange} className="form-control" type="text" id="email" name="email"/> <br/>
          Password <input onChange={this.handleChange} className="form-control" type="text" id="password" name="password"/><br/> <br/> <br/> <br/>
            <input type="submit" value="Submit" className="form-control btn btn-info"/>
          </form>

        
      <h2>Log in instead?</h2>
      <Link exact to="/login"> Login</Link>
      </div>
      </center>
    );

  }
}

export default Register;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from  'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <Switch>
     
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

        
       
      
      </Switch>
     
    );

  }
}

export default App;

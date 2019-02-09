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
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

        
       
      </div>
      </Switch>
     
    );

  }
}

export default App;

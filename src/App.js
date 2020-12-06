import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import Newuser from './Newuser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/newuser" component={Newuser}/>
            <Route path ="/home" component ={Home}/>
            <Route path ="/all-therapists" component ={All}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;

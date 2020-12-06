import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Match() {
  const username = localStorage.getItem('username');

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <h1>Hi, Ziyi!</h1>
        <p>We're glad you're here. Please set up your profile here:</p>
      </div>

      <div className = "float">
        <h3> What therapy format are you looking for? </h3>
        
      </div>

      <div className = "float">
        <h3> Any preference for the therapist's gender? </h3>
        
      </div>

      <div className = "float">
        <h3> Any preference for the therapist's ethnicity? </h3>
        
      </div>
    </div>
  );
}

export default Match;
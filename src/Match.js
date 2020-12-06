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
        <div className = "match-head-text"> 
            <h1>Hi, Ziyi!</h1>
            <p>We're glad you're here. Please set up your profile:</p>
        </div>
      </div>

      <div className = "float">
        <p> What therapy format are you looking for? </p>
        
      </div>

      <div className = "float">
        <p> Any preference for the therapist's gender? </p>
        
      </div>

      <div className = "float">
        <p> Any preference for the therapist's ethnicity? </p>
        
      </div>
    </div>
  );
}

export default Match;
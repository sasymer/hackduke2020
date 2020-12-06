import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function All() {
  const username = localStorage.getItem('username');
  let city = localStorage.getItem('city');
  if (city == "" || city == null) {
    city = "Your City";
  }

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <div className = "match-head-text"> 
            <h1>All Therapists in {city}</h1>
        </div>
      </div>

      <div className = 'center'>
        <div className = 'float2'>
            <h4> Anna White, PsyD, MS </h4>
            <p> Anna is a therapist with 12 years of clinical experience, 
                specialized in trauma and anxiety. </p>
            <button className = "button3"> Learn more </button>
        </div>

        <div className = 'float2'>
            <h4> Kate Fan, PsyD, MS </h4>
            <p> Kate is a therapist with 8 years of clinical experience,
                specialized in gender. </p>
            <button className = "button3"> Learn more</button>
        </div>
        
        <div className = 'float2'>
            <h4> Jen Brown, MD, PhD </h4>
            <p> Jen has 4 years of clinical experience and is specialized
                in trauma and anxiety. </p>
            <button className = "button3"> Learn more  </button>
        </div>
      </div>
    </div>
  );
}

export default All;
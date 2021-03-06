import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Home() {
  const username = localStorage.getItem('username');
  const [profileInfo, setProfileInfo] = useState([]);
  const [city, setCity] = useState("");

  const locs = [
    'Chicago', 'Durham', 'Houston', 'Los Angeles', 'New York', 'San Francisco'
  ];

  const match = () => {
      window.location.href = '/all?city=' + city;
  }

  return (
    <div>
      <Nav/>
      <Grid>
        <Col className = 'half-home'>
         <h1 className = 'motto'>Match with your therapist today. Simpler, faster, better.</h1>
         
         <float>
            <Dropdown 
                placeholder = "Select your location"
                className = 'home-drop'
                onChange = {(e) => {
                    setCity(e.value);
                    localStorage.setItem('city', e.value);
                }}
                options = {locs}
            />
            <button onClick = {match} className = 'button2 arrow'>Let's go!</button>
        </float>
        </Col>

        <Col className = 'half-home2'>
         <img src = {require('./image.png')} />
        </Col>
      </Grid> 
    </div>
  );
}

export default Home;
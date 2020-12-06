import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MultiSelect from 'react-multi-select-component';
import Slider from 'react-input-slider';

function Profile() {
  const username = localStorage.getItem('username');
  let myFormat = 'Teletherapy';
  let myGender = '';
  const [myEths, setEths] = useState([]);
  const [formatI, setFormatI] = useState({x: 0});
  const [genderI, setGenderI] = useState({x: 0});
  const [ethI, setEthI] = useState({x: 0});

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <div className = "match-head-text"> 
            <h1>Hi, Jenny!</h1>
        </div>
      </div>

      <Grid>
        <Col className = 'half'>
            <p className = 'textt'> Basic information </p>
            <div className = 'float'>
                 
            </div>

        </Col>

        <Col className = 'half2'>
            <p className = 'textt'> What are you looking for? </p>
            <div className = 'float'>
                 
            </div>
        </Col>

      </Grid>
    </div>
  );
}

export default Profile;
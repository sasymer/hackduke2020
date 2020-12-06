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

  const logout = () => {
      window.location.href = '/';
      localStorage.setItem('name', '');
  }

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <div className = "match-head-text"> 
            <h1>Hi, Jenny!</h1>
            <button className = 'button2' onClick = {logout}> Logout </button>
        </div>
      </div>

      <Grid>
        <Col className = 'half'>
            <p className = 'textt'> My Profile </p>
            <div className = 'float2'>
                <div> 
                    <h3> Jenny Yoo </h3> 
                    <p> She/Her/Hers, 20 yr </p>
                    <p> jenny.yoo@gmail.com </p>
                    <p> When I was little, I was attacked by a thief
                        who broke into our house. Recently, I've been having 
                        major sleep issues and anxiety living on campus. </p>
                    <p> I am hoping to talk to a therapist who understands my concerns
                        and can help me overcome the situation. I am an international 
                        student who studies in the US and I don't have any prior
                        experience with counceling. I came from a traditional Asian
                        household that isn't so open to talking about mental health issues. </p>
                 </div>
            </div>

        </Col>

        <Col className = 'half2'>
            <p className = 'textt'> My Matches </p>
            <div className = 'float2'>
                <h3> Anna White, PsyD, MS </h3>
                <p> Anna is a therapist with 12 years of clinical experience, 
                    specialized in trauma and anxiety. </p>
                <button className = "button3"> Learn more -> </button>
            </div>
        </Col>

      </Grid>
    </div>
  );
}

export default Profile;
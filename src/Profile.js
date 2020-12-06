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
  const matches = localStorage.getItem('matches');
  const name = localStorage.getItem('myname');
  const email = localStorage.getItem('email');
  const format = localStorage.getItem('format');
  const gender =localStorage.getItem('gender');
  const age = localStorage.getItem('age');
  const budget = localStorage.getItem('budget');
  const issues = localStorage.getItem('issues');
  const insurance = localStorage.getItem('insurance');
  const eth = localStorage.getItem('ethnicity');
  const lang = localStorage.getItem('language');
  const sex = localStorage.getItem('sexuality');
  const faith = localStorage.getItem('faith');
  const types = localStorage.getItem('types');

  let thers;
  if (matches != null && matches.length != 0) {
    thers = matches.split(",");
  } else {
    thers = null;
  }

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

  const redirect = () => {
    window.location.href = '/match';
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
            <br />

            <p className = 'textt'> My Preferences </p>
            <div className = 'float2'>
                <button onClick = {redirect} className = "button3">Update </button>
                <br />
                <br />
                <div> 
                    <p> Format: {format} </p>
                    <p> Type: {types} </p>
                    <p> Issues: {issues} </p>
                    <p> Gender: {gender} </p>
                    <p> Age range: {age} </p>
                    <p> Ethnicity: {eth} </p>
                    <p> Language: {lang} </p>
                    <p> Sexuality: {sex} </p>
                    <p> Faith: {faith} </p>
                    <p> Budget: {budget} </p>
                    <p> Insurance: {insurance} </p>

                 </div>
            </div>

        </Col>

        <Col className = 'half2'>
            <p className = 'textt'> My Matches </p>
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
        </Col>
      </Grid>
    </div>
  );
}

export default Profile;
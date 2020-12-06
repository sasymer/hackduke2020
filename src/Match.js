import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MultiSelect from 'react-multi-select-component';
import Slider from 'react-input-slider';

function Match() {
  const username = localStorage.getItem('username');
  let myFormat = 'Teletherapy';
  let myGender = '';
  const [myEths, setEths] = useState([]);
  const [formatI, setFormatI] = useState({x: 0});
  const [genderI, setGenderI] = useState({x: 0});
  const [ethI, setEthI] = useState({x: 0});

  const format = [
    'In-person', 'Teletherapy', 'Group Therapy'
  ];

  const gender = [
    'Male', 'Female', 'Non-binary'
  ];

  const age = [
    '0-6', '6-10', '11-13', '14-19', 'Adult', '65+'
  ];

  const ethnicity = [
    'African American', 'Hispanic and Latino', 'Asian', 'Native American', 'Pacific Islander', 'Other'
  ];

  const eth = [
    {label: "African American", value: "African American"},
    {label: "Hispanic/Latino", value: "Hispanic/Latino"},
    {label: "Asian", value: "Asian"},
    {label: "Native American", value: "Native American"},
    {label: "Pacific Islander", value: "Pacific Islander"}
  ];

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <div className = "match-head-text"> 
            <h1>Hi, Ziyi!</h1>
            <p>We're glad you're here. Please set up your profile:</p>
        </div>
      </div>

      <div>
        <div className = "float">
            <p> What therapy format are you looking for? </p>
            <Dropdown 
              options={format} 
              onChange={(e) => {
                myFormat = e.value;
              }}
            />
            <br/>
            <p> How important is this to you? {formatI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={formatI.x}
                onChange={({ x }) => setFormatI({ x: x})}
            />
            
        </div>

        <div className = "float">
            <p> Any preference for the therapist's gender? </p>
            <Dropdown 
              options={gender}
              onChange={(e) => {
                myGender = e.value;
              }}
            />
            <br/>
            <p> How important is this to you? {genderI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={genderI.x}
                onChange={({ x }) => setGenderI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> Any preference for the therapist's ethnicity? </p>
            <MultiSelect 
              options={eth}
              value = {myEths}
              onChange = {setEths}
            />
            <br/>
            <p> How important is this to you? {genderI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={ethI.x}
                onChange={({ x }) => setEthI({ x: x})}
            />
        </div>
      </div>
    </div>
  );
}

export default Match;
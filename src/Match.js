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
  let mySex = '';
  let myFaith = '';
  let myAge = '';
  let myBudget = ''; 
  let myInsur = '';
  let myLang = 'English';
  const [myEths, setEths] = useState([]);
  const [myIssues, setIssues] = useState([]);
  const [myTypes, setTypes] = useState([]);

  const [formatI, setFormatI] = useState({x: 0});
  const [genderI, setGenderI] = useState({x: 0});
  const [ethI, setEthI] = useState({x: 0});
  const [sexI, setSexI] = useState({x: 0});
  const [faithI, setFaithI] = useState({x: 0});
  const [ageI, setAgeI] = useState({x: 0});
  const [issuesI, setIssuesI] = useState({x: 0});
  const [budgetI, setBudgetI] = useState({x: 0});
  const [insurI, setInsurI] = useState({x: 0});
  const [typeI, setTypeI] = useState({x: 0});
  const [langI, setLangI] = useState({x: 0});

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

  const prices = [
    '<75', '75-100', '100-150', '150-200', '200+'
  ];

  const langs = [
    'Spanish', 'French', 'ASL', 'German', 'Chinese', 'Arabic' 
  ];

  const sex = [
    'Gay', 'Lesbian', 'Bisexual'
  ];

  const faith = [
    'Christian', 'Buddhist', 'Jewish', 'Islam', 'LDS', 'Hindu', 'Sikh', 'Other'
  ];

  const issues = [
    'ADHD', 'Addiction', 'Anxiety', 'Depression', 'Eating Disorders', 'Relationship Issues',
    'Self Esteem', 'Sexual Abuse', 'Stress', 'Trauma and PTSD'
  ];

  const type = [
    'Acceptance and Commitment', 'Christian Counseling', 'Cognitive Behavioral', 'Emotionally Focused', 'Family / Marital', 'Trauma Focused'
  ];

  const ins = [
      'Alliance', 'Anthem', 'Beacon', 'Blue Care Network', 'Blue Cross', 'Cigna', 'UnitedHealthcare'
  ];

  return (
    <div>
      <Nav/>
      <div className = "match-head"> 
        <div className = "match-head-text"> 
            <h1>Hi, Jenny!</h1>
            <p>We're glad you're here. Please set up your profile:</p>
        </div>
      </div>

      <div className = 'questions'>
        <div className = "float">
            <p> What therapy format are you looking for? </p>
            <Dropdown 
              options={format} 
              onChange={(e) => {
                myFormat = e.value;
              }}
            />
            <br/>
            <p> How important is the format to you? {formatI.x} </p>
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
            <p> How important is the therapist's gender to you? {genderI.x} </p>
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
            <p> How important is the therapist's ethnicity to you? {ethI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={ethI.x}
                onChange={({ x }) => setEthI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> Do you prefer therapists that serve a certain sexuality? </p>
            <Dropdown 
              options={sex}
              onChange={(e) => {
                mySex = e.value;
              }}
            />
            <br/>
            <p> How important is it that the therapist serves this sexuality? {sexI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={sexI.x}
                onChange={({ x }) => setSexI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> Do you prefer therapists that serve a certain faith? </p>
            <Dropdown 
              options={faith}
              onChange={(e) => {
                myFaith = e.value;
              }}
            />
            <br/>
            <p> How important is it that the therapist serves this faith? {faithI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={faithI.x}
                onChange={({ x }) => setFaithI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> Do you prefer therapists that work with a certain age?</p>
            <Dropdown 
              options={age}
              onChange={(e) => {
                myAge = e.value;
              }}
            />
            <br/>
            <p> How important is it that the therapist serves this age range? {ageI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={ageI.x}
                onChange={({ x }) => setAgeI({ x: x})}
            />
        </div>

         <div className = "float">
            <p> What issues do you want to discuss? </p>
            <MultiSelect 
              options={issues}
              value = {myIssues}
              onChange = {setIssues}
            />
            <br/>
            <p> How important is it that the therapist specializes in these issues? {issuesI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={issuesI.x}
                onChange={({ x }) => setIssuesI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> What is your budget for one session? Choose the highest range that works for you.</p>
            <Dropdown 
              options={prices}
              onChange={(e) => {
                myBudget = e.value;
              }}
            />
            <br/>
            <p> How important is it that the price falls in your budget? {budgetI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={budgetI.x}
                onChange={({ x }) => setBudgetI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> Which type of insurance do you hold?</p>
            <Dropdown 
              options={ins}
              onChange={(e) => {
                myInsur = e.value;
              }}
            />
            <br/>
            <p> How important is it that your insurance covers the therapy? {insurI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={insurI.x}
                onChange={({ x }) => setInsurI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> What do you want your sessions to be like? </p>
            <MultiSelect 
              options={type}
              value = {myTypes}
              onChange = {setTypes}
            />
            <br/>
            <p> How important is it that your therapists offer what you're looking for? {typeI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={typeI.x}
                onChange={({ x }) => setTypeI({ x: x})}
            />
        </div>

        <div className = "float">
            <p> If not English, what language do you prefer to speak?</p>
            <Dropdown 
              options={langs}
              onChange={(e) => {
                myLang = e.value;
              }}
            />
            <br/>
            <p> How important is it that your therapist speaks your preferred language? {langI.x} </p>
            <Slider 
                axis = "x"
                xstep={1}
                xmin={0}
                xmax={10}
                x={langI.x}
                onChange={({ x }) => setLangI({ x: x})}
            />
        </div>
        <br />

        <button className = 'button2'> Find my matches! </button>

      </div>
    </div>
  );
}

export default Match;
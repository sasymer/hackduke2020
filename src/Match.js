import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MultiSelect from 'react-multi-select-component';
import Slider from 'react-input-slider';

const printer = 'lksdjflkjd';
let myFormat = 'Teletherapy';
let myGender = '';
let mySex = '';
let myFaith = '';
let myAge = '';
let myBudget = ''; 
let myInsur = '';
let myLang = 'English';
let myEths2 = [];
let myIssues2 = [];
let myTypes2 = [];

function Match() {
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
    {label: 'ADHD', value: 'ADHD'}, 
    {label: 'Addiction', value: 'Addiction'}, 
    {label: 'Anxiety', value: 'Anxiety'}, 
    {label: 'Depression', value: 'Depression'}, 
    {label: 'Eating Disorders', value: 'Eating Disorders'}, 
    {label: 'Relationship Issues', value: 'Relationship Issues'}, 
    {label: 'Self Esteem', value: 'Self Esteem'}, 
    {label: 'Sexual Abuse', value: 'Sexual Abuse'}, 
    {label: 'Stress', value: 'Stress'}, 
    {label: 'Trauma and PTSD', value: 'Trauma and PTSD'}
  ];

  const type = [
    {label: 'Acceptance and Commitment', value: 'Acceptance and Commitment'}, 
    {label: 'Christian Counseling', value: 'Christian Counseling'}, 
    {label: 'Cognitive Behavioral', value: 'Cognitive Behavioral'}, 
    {label: 'Emotionally Focused', value: 'Emotionally Focused'}, 
    {label: 'Family / Marital', value: 'Family / Marital'}, 
    {label: 'Trauma Focused', value: 'Trauma Focused'}
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

        <button onClick = {algo} className = 'button2'> Find my matches! </button>
      </div>
    </div>
  );

  function algo() {
    console.log("algo");
    let issuesArray = [];
    let i;
    for (i = 0; i < myIssues.length; i++) {
      issuesArray.push(myIssues[i].value);
    }

    let ethsArray = [];
    for (i = 0; i < myEths.length; i++) {
      ethsArray.push(myEths[i].value);
    }

    let typesArray = [];
    for (i = 0; i < myTypes.length; i++) {
      typesArray.push(myTypes[i].value);
    }
  
    let p = new Patient("Jenny", "Yoo", "jenny.yoo", "jenny.yoo@gmail.com", 
    'mypwd', myFormat, myGender, myAge, myBudget, issuesArray, myInsur, ethsArray,
    myLang, mySex, myFaith, typesArray, "", formatI.x, genderI.x, ageI.x, budgetI.x, issuesI.x, 
  insurI.x, ethI.x, langI.x, sexI.x, faithI.x, typeI.x, 0);

    localStorage.setItem('myname', 'Jenny Yoo');
    localStorage.setItem('username', 'jenny.yoo');
    localStorage.setItem('email', 'jenny.yoo@gmail.com');
    localStorage.setItem('format', myFormat);
    localStorage.setItem('gender', myGender);
    localStorage.setItem('age', myAge);
    localStorage.setItem('budget', myBudget);
    localStorage.setItem('issues', issuesArray);
    localStorage.setItem('insurance', myInsur);
    localStorage.setItem('ethnicity', ethsArray);
    localStorage.setItem('language', myLang);
    localStorage.setItem('sexuality', mySex);
    localStorage.setItem('faith', myFaith);
    localStorage.setItem('types', typesArray);
    console.log(p);

    window.location.href = '/profile';
  }
}

function print() {
  console.log(printer);
}

class Person {
	constructor(firstName, lastName, username, password, email) {
  	// this.firstName 	= '';
    // this.lastName 	= '';
    // this.username 	= '';
    // this.password 	= '';
    // this.email 			= '';
  }
  
  get firstName() { return this.firstName; }
  get lastName() { return this.lastName; }
  get password() { return this.password; }
  get username() { return this.username; }
  get email()    { return this.email; }
  
  set firstName(x) {
    this.firstName = x;
  }
  set lastName(x) {
    this.lastName = x;
  }
  set password(x) { this.password = x; }
  set username(x) { this.username = x; }
  set email(x) 	  { this.email = x; }
}

class Therapist extends Person{
	constructor(firstName, lastName, username, password, email, format, gender, age, price, issue, insurance, ethnicity, language, sexuality, faith, therapyType, capacity, location) {
    super(firstName, lastName, username, password, email);
		this.formatVar = format;
		this.genderVar = gender;
    this.ageVar = age;
    this.priceVar = price;
    this.issueVar = issue;
    this.insuranceVar = insurance;
    this.ethnicityVar = ethnicity;
    this.languageVar = language;
    this.sexualityVar = sexuality;
    this.faithVar = faith;
    this.therapyTypeVar = therapyType;
    this.capacityVar = capacity;
    this.locationVar = location;
	}
  	
    get format() { return this.formatVar; }
    get gender() { return this.genderVar; }
    get age() { return this.ageVar; }
    get price() { return this.priceVar; }
    get issue() { return this.issueVar; }
    get insurance() { return this.insuranceVar; }
    get ethnicity() { return this.ethnicityVar; }
    get language() { return this.languageVar; }
    get sexuality() { return this.sexualityVar; }
    get faith() { return this.faithVar; }
    get therapyType() { return this.therapyTypeVar; }
    get capacity() { return this.capacityVar; }
    get location() { return this.locationVar; }
    
    set format(x) 			{ this.formatVar = x; }
    set gender(x)				{ this.genderVar = x; }
    set age(x)					{ this.ageVar = x; }
    set price(x) 				{ this.priceVar = x; }
    set issue(x)				{ this.issueVar = x; }
    set insurance(x) 		{ this.insuranceVar = x; }
    set ethnicity(x) 		{ this.ethnicityVar = x; }
    set language(x) 		{ this.languageVar = x; }
    set sexuality(x) 		{ this.sexualityVar = x; }
    set faith(x) 				{ this.faithVar = x; }
    set therapyType(x) 	{ this.therapyTypeVar = x; }
    set capacity(x) 		{ this.capacityVar = x; }
    set location(x) 		{ this.locationVar = x; }
}


class Patient extends Person{
	constructor(firstName, lastName, username, email, password, format, gender, age, price, issue, insurance, ethnicity, language, sexuality, faith, therapyType, location, formatW, genderW, ageW, priceW, issueW, insuranceW, ethnicityW, languageW, sexualityW, faithW, therapyTypeW, locationW) {
    super(firstName, lastName, username, password, email);
    this.formatVar = format;
		this.genderVar = gender;
    this.ageVar = age;
    this.priceVar = price;
    this.issueVar = issue;
    this.insuranceVar = insurance;
    this.ethnicityVar = ethnicity;
    this.languageVar = language;
    this.sexualityVar = sexuality;
    this.faithVar = faith;
    this.therapyTypeVar = therapyType;
    this.locationVar = location;
    
    this.formatWVar = formatW;
		this.genderWVar = genderW;
    this.ageWVar = ageW;
    this.priceWVar = priceW;
    this.issueWVar = issueW;
    this.insuranceWVar = insuranceW;
    this.ethnicityWVar = ethnicityW;
    this.languageWVar = languageW;
    this.sexualityWVar = sexualityW;
    this.faithWVar = faithW;
    this.therapyTypeWVar = therapyTypeW;
    this.locationWVar = locationW;
    this.weightsVar = [formatW, genderW, ageW, priceW, issueW, insuranceW, ethnicityW, languageW, sexualityW, faithW, therapyTypeW, locationW];
	}
  	
    get format() { return this.formatVar; }
    get gender() { return this.genderVar; }
    get age() { return this.ageVar; }
    get price() { return this.priceVar; }
    get issue() { return this.issueVar; }
    get insurance() { return this.insuranceVar; }
    get ethnicity() { return this.ethnicityVar; }
    get language() { return this.languageVar; }
    get sexuality() { return this.sexualityVar; }
    get faith() { return this.faithVar; }
    get therapyType() { return this.therapyTypeVar; }
    get location() { return this.locationVar; }
    
  	get formatW() { return this.formatWVar; }
    get genderW() { return this.genderWVar; }
    get ageW() { return this.ageWVar; }
    get priceW() { return this.priceWVar; }
    get issueW() { return this.issueWVar; }
    get insuranceW() { return this.insuranceWVar; }
    get ethnicityW() { return this.ethnicityWVar; }
    get languageW() { return this.languageWVar; }
    get sexualityW() { return this.sexualityWVar; }
    get faithW() { return this.faithWVar; }
    get therapyTypeW() { return this.therapyTypeWVar; }
    get locationW() { return this.locationWVar; }
    get weights() { return this.weightsVar; }
    
    set format(x) 			{ this.formatVar = x; }
    set gender(x)				{ this.genderVar = x; }
    set age(x)					{ this.ageVar = x; }
    set price(x) 				{ this.priceVar = x; }
    set issue(x) 				{ this.issueVar = x; }
    set insurance(x) 		{ this.insuranceVar = x; }
    set ethnicity(x) 		{ this.ethnicityVar = x; }
    set language(x) 		{ this.languageVar = x; }
    set sexuality(x) 		{ this.sexualityVar = x; }
    set faith(x) 				{ this.faithVar = x; }
    set therapyType(x) 	{ this.therapyTypeVar = x; }
    set location(x) 		{ this.locationVar = x; }
    
    set formatW(x) 			{ this.formatWVar = x; }
    set genderW(x) 			{ this.genderWVar = x; }
    set ageW(x) 				{ this.ageWVar = x; }
    set priceW(x) 			{ this.priceWVar = x; }
    set issueW(x) 			{ this.issueWVar = x; }
    set insuranceW(x) 	{ this.insuranceWVar = x; }
    set ethnicityW(x) 	{ this.ethnicityWVar = x; }
    set languageW(x) 		{ this.languageWVar = x; }
    set sexualityW(x) 	{ this.sexualityWVar = x; }
    set faithW(x) 			{ this.faithWVar = x; }
    set therapyTypeW(x) { this.therapyTypeWVar = x; }
    set locationW(x) 		{ this.locationWVar = x; }
    
    updateWeights() {
    	this.weightsVar = [this.formatWVar, this.genderWVar, this.ageWVar, this.priceWVar, this.issueWVar, this.insuranceWVar, this.ethnicityWVar, this.languageWVar, this.sexualityWVar, this.faithWVar, this.therapyTypeWVar, this.locationWVar];
    }
}

let th1 = new Therapist('Online', 'Male', 'abcd', 'password', 'tht@tht.org', '50-75', '$$', ['Anxiety', 'Depression'], 'insuranceA', 'White', 'English', 'Gay', 'None', 'Art', 6, 'California')
let th2 = new Therapist('Online', 'Female', 'qwerty', 'password', 'asdf@duke.edu', '25-50', '$$$', ['PTSD', 'Anxiety'], 'insuranceA', 'Hispanic and Latino', 'English', 'Straight', 'None', 'Cognitive', 4, 'California')
let p1 = new Patient('Online', 'Male', 'blah', 'password', 'asd@duke.edu', '50-75', '$$', ['Anxiety'], 'insuranceA', 'White', 'English', 'Gay', 'None', 'Art', 'California', 6, 10, 5, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10)

var allTherapists = [th1, th2];

var comparisonTraits = ['format', 'gender', 'age', 'price', 'issue', 'insurance', 'ethnicity', 'language', 'sexuality', 'faith', 'therapyType', 'location']

for(var i = 0; i < allTherapists.length; i++){
  var currTherapist = allTherapists[i];
  //document.write(Object.values(currTherapist));
}

function rateTherapists(patient) {
	var ratings = [];
	var weights = patient.weights;
  
  // Make weights for all therapists
	for (var i = 0; i < allTherapists.length; i++) {
  	var score = 0;
    var misMatch = false
  	var therapist = allTherapists[i];
  	if ((therapist.capacity <= 0) || (patient.format != therapist.format)) {//|| (patient.issue.every(val => therapist.issue.includes(val))) 
    	misMatch = true;
    	//break;
    }
    for(var k = 0; k < patient.issue.length; k++){
    	var currIssue = patient.issue[k];
      if (! (therapist.issue.includes(currIssue))){
      	misMatch = true;
      }
    }
    
    for(var j = 0; j < comparisonTraits.length; j++){
    	var trait = comparisonTraits[j];
    	var traitW = parseInt(patient[trait + 'W']);
      //var matching = (therapist[trait] == patient[trait]);
      var matching = true;
      for(var currIssue in patient[trait]){
        if (! (therapist.trait.includes(currIssue))){
          matching = false;
        }
      }
      
      if (matching){
      	score += traitW;
      }
      else{
      	if (traitW < 0) {
        	misMatch = true;
          //break;
        }
      }
    
    }
    if (misMatch){
    	score = -1;
    }
    ratings.push([score, therapist]);
  }
  
  // Sort based on weights
  ratings.sort(function(a, b){return b[0] - a[0]})//.reverse()
  
  var sorted = []
  for (var i = 0; i < ratings.length; i++) {
  	sorted.push([ratings[i][1].firstName + ' ' + ratings[i][1].lastName, ratings[i][0]])//Divide by max score for percentage value
  }
 
 	return sorted;
}


//document.write(rateTherapists(p1));

export default Match;
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

//   useEffect(() => {
//     fetch("/api/getprofile?id=" + userid)
//     .then(response => response.json())
//     .then(data => {
//       setProfileInfo(data);
//     });
//   }, []);  

  return (
    <div>
      <Nav/>
      <h1>Find your best mental health professional match</h1>
      {profileInfo.map((val) => {
        var date = val.date_created.split("T");
        date = date[0];
        return (
        <p>
          User Type: {val.type} | 
          Date Created: {date}
        </p>
        );
      })}
    <p> **insert location dropdown here </p>
    </div>
  );
}

export default Home;
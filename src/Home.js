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

  return (
    <div>
      <Nav/>
      <h1>Find your best mental health professional match</h1>
      <p> **insert location dropdown here </p>
    </div>
  );
}

export default Home;
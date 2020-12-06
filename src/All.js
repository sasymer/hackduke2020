import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function All() {
  const username = localStorage.getItem('username');

  return (
    <div>
      <Nav/>
      <h1>All therapists in your area:</h1>
      <p> **insert location dropdown here </p>
      <p> Once loaded, show therapists </p>
    </div>
  );
}

export default All;
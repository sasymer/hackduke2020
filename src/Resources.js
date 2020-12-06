import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Resources() {
  const username = localStorage.getItem('username');

  return (
    <div>
      <Nav/>
      <h1>Resources</h1>
    </div>
  );
}

export default Resources;
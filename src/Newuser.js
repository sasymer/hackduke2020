import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Nav from './Nav';
var type = "user";
var adminCode = "wrong";

function Newuser() {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [userList, setUserList] = useState([]);

    const submitUser = () => {
      if (username === undefined || username.length === 0 || pwd === undefined || pwd.length === 0){
        alert('Username or password is empty. Please enter both a username and a password.');
      }
      else {
          window.location.href = "/login";
    }}; 
  
  return (
    <div>
      <h1>Sign up</h1>
      <h2>Thank you for joining us!</h2>
        <div className="form">
            <label>Username:</label>
            <input 
                type="text" 
                name="username" 
                onChange={(e)=> {
                    setUsername(e.target.value)
                }} 
            />
            <label>Password:</label>
            <input 
                type="text" 
                name="pwd" 
                onChange={(e)=> {
                    setPwd(e.target.value)
                }} 
            />
            <br/>
            <button className = "newb" onClick = {submitUser}>Submit</button>
            
            <Link to = '/login'><button className = "newb"> Back to Login </button></Link>
        </div>
    </div>
  );
}

export default Newuser;
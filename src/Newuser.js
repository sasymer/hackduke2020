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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitUser = () => {
      window.location.href = "/login";
    }; 
  
  return (
    <div>
      <h1>Sign up</h1>
      <h2>Thank you for joining us!</h2>
        <div className="form">
            <input className = "login-form"
                placeholder = "Full name"
                type="text" 
                name="name" 
                onChange={(e)=> {
                    setName(e.target.value)
                }} 
            />
            <input className = "login-form"
                placeholder = "Email address"
                type="text" 
                name="email" 
                onChange={(e)=> {
                    setEmail(e.target.value)
                }} 
            />
            <input className = "login-form"
                placeholder = "Username"
                type="text" 
                name="username" 
                onChange={(e)=> {
                    setUsername(e.target.value)
                }} 
            />
            <input className = "login-form"
                placeholder = "Password"
                type="text" 
                name="pwd" 
                onChange={(e)=> {
                    setPwd(e.target.value)
                }} 
            />
            <br/>
            <button className = "button2" onClick = {submitUser}>I'm in!</button>
            
            <p>Already a member? <Link to = '/login'> <b> Login </b> </Link> </p>
            {/** <Link to = '/login'><button className = "button2"> Back to Login </button></Link> 
            **/}
        </div>
    </div>
  );
}

export default Newuser;
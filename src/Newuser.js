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
      console.log("admincode: " + adminCode + " | " + type);
      fetch("/api/checkuser?id=" + username)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0){
          alert('Username is already taken. Please try again with a different username.');
        }
        else if (username === undefined || username.length === 0 || pwd === undefined || pwd.length === 0){
          alert('Username or password is empty. Please enter both a username and a password.');
        }
        else{
          if(type === "admin" && adminCode != "cs316") {
            alert('Incorrect Admin Code. Please Enter a Valid Code.');
          } else {
          var user = {
            username: username,
            pwd: pwd, 
            type: type
          };
          var options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
          }
          fetch("/api/insert", options); 
    
          window.location.href = "/";
          }
        }
      });   
      
    };

    function displayCode() {
      var cont = document.getElementById('cont');
      if (cont.style.display == 'block') {
          cont.style.display = 'none';
      }
      else {
          cont.style.display = 'block';
      }
  }
  

  return (
    <div>
      
      <h1>Register New User</h1>
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
            <label>Select User Type</label>
            <select id="sel" onChange={displayCode}>
            <option value="1" >User</option>
            <option value="2" selected>Admin</option> </select>
            <div id="cont" style={{display:"block"}}>
              Admin Code: 
              <input 
                      type="text" 
                      name="type" 
                      onChange={(e)=> {
                        adminCode = e.target.value;
                        type = "admin";
                      }} 
                  />
            </div>
            <br/>
            <button className = "newb" onClick = {submitUser}>Submit</button>
            
            <Link to = '/'><button className = "newb"> Back to Login </button></Link>
        </div>
    </div>
  );
}

export default Newuser;
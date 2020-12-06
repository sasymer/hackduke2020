import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Axios from 'axios';
import { Link } from 'react-router-dom';
var current_userid = "";
var current_type = "";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <h1>Project</h1>

      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <br></br>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password: </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <br></br>
        <button className = "newb" disabled={!validateForm()} type="submit">
          Login
        </button>
        {" "}
        <Link to = '/newuser'><button className = "newb"> Register </button></Link>
      </form>
    </div>
  );
}
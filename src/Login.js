import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <FormGroup className = "login-form" controlId="username" bsSize="large">
          <FormControl
            placeholder = "Username..."
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <br></br>

        <FormGroup className = "login-form" controlId="password" bsSize="large">
          <FormControl
            placeholder = "Password..."
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <br></br>

        <button className = "button2" disabled={!validateForm()} type="submit">
          Login
        </button>

        {" "}
        <Link to = '/newuser'>
            <button className = "button2"> Register </button>
        </Link>
      </form>
    </div>
  );
}
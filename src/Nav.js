import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const type = localStorage.getItem('type');
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <nav>
            <u1 className="navlinks">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/all'>
                    <li>All Therapists</li>
                </Link>
                <Link style={navStyle} to='/match'>
                    <li>Find my match</li>
                </Link>
                <Link style={navStyle} to='/resources'>
                    <li>Resources</li>
                </Link>
                <Link style ={navStyle} to = '/login'>
                    <li>Logout</li> 
                </Link>
            </u1>
        </nav>   
    );
}

export default Nav;

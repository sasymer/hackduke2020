import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const type = localStorage.getItem('type');
    const navStyle = {
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
        background: 'whitesmoke',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '10px',
        borderRadius: '5px'
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
            <Link style ={navStyle} to = '/login'>
                <li>Logout</li> 
            </Link>
            </u1>
        </nav>   
    );
}

export default Nav;

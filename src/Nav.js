import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const type = localStorage.getItem('type');
    const name = localStorage.getItem('name');
    console.log('NAME ' + name);

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    if (name != null && name != ''){
        return (
            <nav>
                <u1 className="navlinks">
                    <Link style={navStyle} to='/'>
                        <li>TheraMatch</li>
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
                    <Link style ={navStyle} to = '/profile'>
                        <li>Profile</li> 
                    </Link>
                </u1>
            </nav>   
        );
    } else {
        return (
            <nav>
                <u1 className="navlinks">
                    <Link style={navStyle} to='/'>
                        <li>TheraMatch</li>
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
                    <Link className = 'button4' style ={navStyle} to = '/login'>
                        <li>Login</li> 
                    </Link>
                </u1>
            </nav>   
        );
    }

    
}

export default Nav;

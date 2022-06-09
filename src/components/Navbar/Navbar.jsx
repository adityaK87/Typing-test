import React from 'react';
import './Navbar.css'
import logo from '../logo& img/logo.png'

const Navbar=()=>{
    
    return(
        <div className='nav-container'>
            <div className="nav-left">
                <img className="nav-logo"  src ={logo} alt="" />
                <p className="nav-logo-text"> <i>Typing Test</i></p>
            </div>
            <div className="nav-right">
                <a 
                href="https://github.com/adityapal87"
                target="_blank"
                className="nav-git-link"
                rel='noreferrer'
                >Git-Link
                </a>
            </div>
        </div>
    );

};
export default Navbar;
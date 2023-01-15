import React from 'react';
import './Navbar.css';
import logo from '../logo&img/logo.png';
import gitLogo from '../logo&img/gitLogo1.png';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (
        <div className='nav-container'>
            <div className="nav-left">
                <img className="nav-logo" src={logo} alt="logo" />
                <p className="nav-logo-text"> <i> {props.title}</i></p>
            </div>

            <div className="nav-right">
                <a
                    href="https://github.com/adityaK87"
                    target="_blank"
                    className="nav-git-link"
                    rel='noreferrer'
                >
                    <img src={gitLogo} alt="" width="35px" />
                </a>
            </div>

        </div>
    );

};
export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


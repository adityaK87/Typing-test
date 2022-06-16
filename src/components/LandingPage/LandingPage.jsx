import React from 'react';
import './LandingPage.css'
import Typewriter from 'typewriter-effect';
import typing from '../logo&img/typing.png'

const LandingPage = () => {

    return(
        <div data-aos="fade-right" className="LandingPage-container ">
        <div className="LandingPage-left">
            <h1 className='Landing-header'>Can you type...</h1>
            <div className="typewriter-container">
     <Typewriter // This Typewriter is use for animating  these{['Fast?', 'Correct?','Quick?']}
         options={{
            strings: ['Fast?', 'Correct?','Quick?'],
            autoStart: true,
            loop: true,
        }} 
    />
            </div>

        </div>
        <div className="LandingPage-right">
            <img src={typing} alt="" className='typing-img' data-aos="fade-left" />
        </div>

        </div>
    );
}

export default LandingPage;

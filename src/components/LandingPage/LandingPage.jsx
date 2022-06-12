import React from 'react';
import './LandingPage.css'
import flash from '../logo&img/flash.png';
import Typewriter from 'typewriter-effect';

const LandingPage = () => {

    return(
        <div data-aos="fade-right" className="LandingPage-container ">
        <div className="LandingPage-left">
            <h1 className='Landing-header'>Can you type...</h1>
            <div className="typewriter-container">
     <Typewriter //This typewriter is used to animate the [Fast?,Correct?,Quick?]
         options={{
            strings: ['Fast?', 'Correct?','Quick?'],
            autoStart: true,
            loop: true,
        }}
    />
            </div>

        </div>
        <div className="LandingPage-right">
            <img src={flash} alt="" className='flash-img' data-aos="fade-left" />
        </div>

        </div>
    );
}

export default LandingPage;

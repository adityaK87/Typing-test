import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css'

const ChallengeSection = ({
    selectedParagraph,  
    words, 
    characters,
    wpm,
    timeRemaining ,
    timeStarted}) => {
    console.log(selectedParagraph);

    return(

        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className='challenge-section-header'>
                Take a Typing-Test Now!!
            </h1>
            <TestContainer 
            selectedParagraph={selectedParagraph} 
            timeRemaining={timeRemaining} 
            timeStarted={timeStarted } 
            words={words} 
            characters={characters} 
            wpm={wpm} /> 
        </div>
    ); 

}

export default ChallengeSection;

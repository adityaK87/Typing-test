import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css'

const ChallengeSection = ({
    selectedParagraph,  
    words, 
    characters,
    wpm,
    timeRemaining ,
    timeStarted,
    testInfo,
    onInputChange,
    startAgain }) => {
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
            wpm={wpm}
            testInfo={testInfo} 
            onInputChange={onInputChange}
            startAgain = {startAgain} 
            /> 
        </div>
    ); 

}

export default ChallengeSection;

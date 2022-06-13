import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'

const TestContainer = ({
    selectedParagraph,  
    words, 
    characters,
    wpm,
    timeRemaining ,
    timeStarted}) => {
    
    return(
        <div className="test-container">
        {timeRemaining >0 ? (
            <div data-aos="fade-up" className="typing-challenge-container">
           <TypingChallengeContainer
               words={words}
               characters={characters} 
               wpm={wpm}
               selectedParagraph={selectedParagraph}
               timeRemaining={timeRemaining}
                />
        </div>
        ):(
            <div className="try-again-container">
               <TryAgain 
               
               timeStarted={timeStarted}
               words={words}
               characters={characters} 
               wpm={wpm}
              
               />
            </div> 
        )
        };
        </div> 
    );
}
export default TestContainer;


// This TestContainer.jsx is the child Component of ChallengeSection.jsx

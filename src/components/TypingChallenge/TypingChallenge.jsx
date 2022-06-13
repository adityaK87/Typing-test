import React from 'react';
import './TypingChallenge.css';

const TypingChallenge = ({selectedParagraph ,timeStarted,timeRemaining}) => {
    return (
    <div className='typing-cahallege'>
        <div className="timer-section">
            <p className="timer">00:
            {
             timeRemaining >=10 ?timeRemaining:`0${timeRemaining}`
            }</p>
            <p className="timer-info">{!timeStarted && "Start Typing"}</p>
        </div>
        <div className="textarea-container">
            <div className="textarea-left">
                 <div className="textarea test-paragraph">
                    {selectedParagraph}
                 </div>
            </div>
            <div className="textarea-right">
             <textarea className='textarea'
             placeholder='Start Typing Here' 
             ></textarea>

            </div>
        </div>
    </div>
    );
}
 
export default TypingChallenge;

// This is the child component of TypingChallengeContainer.jsx  
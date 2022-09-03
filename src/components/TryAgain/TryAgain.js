import React from 'react';
import './TryAgain.css'

const TryAgain = ({ words, characters, wpm, startAgain }) => {

    return (
        <div className="try-again-container">
            <h1>Test Results </h1>
            <div className="test-result">
                <p><b>Characters : {characters}</b></p>
                <p><b>Words : {words}</b></p>
                <p> <b> Speed : {wpm}wpm </b></p>

            </div>
            <div>
                <button className='start-again-button' onClick={() => startAgain()}>Re-try</button>
            </div>

        </div>
    );
}
export default TryAgain;

// This TryAgain.jsx component is child component of TestContainer.jsx
// This TryAgain.jsx component is sibling component of TypingChallengeContainer.jsx

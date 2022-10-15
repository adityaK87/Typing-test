import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timeStarted,
    testInfo,
    onInputChange }) => {
    return (
        <div className="Typing-challenge-container">
            {/* details section */}
            <div className="details-container">

                {/* words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* character typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

                {/* speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />

            </div>
            {/* The real challenge */}
            <div className="typeWriter-container">
                <TypingChallenge
                    timeStarted={timeStarted}
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )

}
export default TypingChallengeContainer;

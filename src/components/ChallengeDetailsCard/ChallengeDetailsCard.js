import React from 'react';
import './ChallengeDetailsCard.css'

const ChallengeDetailsCard = ({ cardName, cardValue }) => { //These cardName and cardValue are the props
    return (
        <div className="card-details-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    );
}
export default ChallengeDetailsCard;

// This ChallengeDetailsCard.jsx is child component of TypingChallengeContainer 

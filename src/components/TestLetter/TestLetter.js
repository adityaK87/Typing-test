import React from 'react';
import './TestLetter.css'

const TestLetter = ({ individualLetterInfo }) => {
    const { status } = individualLetterInfo;
    // let statusClass; 


    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status]

    // if(status === "correct"){
    //     statusClass = "test-letter-correct";
    // } else if (status === "incorrect"){
    //     statusClass="test-letter-incorrect";
    // }else if(status === "not-attempted") {
    //     statusClass = "test-letter-not-attempted";
    // }

    // console.log(individualLetter)
    return (
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    );
}
export default TestLetter;
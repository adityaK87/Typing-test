import React from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import { SAMPLE_PARAGRAPHS } from './../../data/SampleParagraph';
// import axios from 'axios';

const paraURL = "http://metaphorpsum.com/paragraphs/10/9"

const totalTime = 60;
const DefaultState = {
  selectedParagraph: " ",
  timeStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: []
}

class App extends React.Component {

  state = DefaultState;

  fetchNewParagraphFallback = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ]
    const selectedParagraphArray = data.split("");
    // console.log( "splitted para -",selectedParagraphArray)
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    })
    this.setState({
      ...DefaultState,
      testInfo,
      selectedParagraph: data
    });


  }
  //This paragraph is getting from api 

  fetchNewParagraph = () => {

    fetch(paraURL)
      .then((response) => response.text())
      .then((data) => {
        //console.log(data);
        this.setState({ selectedParagraph: data })
        const selectedParagraphArray = data.split("");
        // console.log( "splitted para -",selectedParagraphArray)
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        })
        this.setState({
          ...DefaultState,
          testInfo,
          selectedParagraph: data
        });
      });

  }

  componentDidMount() {

    this.fetchNewParagraphFallback();

  }

  setTimer = () => {
    this.setState({ timeStarted: true })
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // change the WPM 
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0
            ? (this.state.words / timeSpent) * totalTime
            : 0;

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        })
      } else {
        clearInterval(timer)
      }

    }, 1000);
  }

  startAgain = () => this.fetchNewParagraphFallback();


  handleUserInput = (inputValue) => {
    // console.log(inputValue) 
    if (!this.state.timeStarted) this.setTimer()
    /**
       * 1. Handle the underflow case - all characters should be shown as not-attempted
       * 2. Handle the overflow case - early exit
       * 3. Handle the backspace case
       *      - Mark the [index+1] element as notAttempted
       *        (irrespective of whether the index is less than zero)
       *      - But, don't forget to check for the overflow here
       *        (index + 1 -> out of bound, when index === length-1)
       * 4. Update the status in test info
       *      1. Find out the last character in the inputValue and it's index
       *      2. Check if the character at same index in testInfo (state) matches
       *      3. Yes -> Correct
       *         No  -> Incorrect (Mistake++)
       * 5. Irrespective of the case, characters, words and wpm can be updated
       */
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted"
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words })
      return;
    }
    //make a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    // check for the correct typed letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // update the state
    this.setState({
      testInfo,
      words,
      characters
    });
  }

  render() {
    // console.log("Test Info -", this.state.testInfo);
    // This is used for fetching data from api by  using async await     
    // async function fetchParagraph(){
    //   try {
    //     const para = await axios.get(paraURL)
    //     console.log("The API's Prargraph is ",para);
    //   } catch (error) {
    //    console.log(error)
    //   }
    // }
    // fetchParagraph();
    return (
      <div className='App'>
        {/* NavBar */}
        <Navbar title="Typing Test" />

        {/* LandingPage */}
        <LandingPage />

        {/* challenge-section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timeStarted={this.state.timeStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* Footer */}
        <Footer />
      </div>

    );
  }
}
export default App;

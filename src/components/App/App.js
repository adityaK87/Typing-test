import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import './App.css';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
// import axios from 'axios';

const paraURL="http://metaphorpsum.com/paragraphs/2/9"
 
const totalTime = 40;
class App extends React.Component{

  state={
    selectedParagraph:"Namaste India!!",
    timeStarted:false,
    timeRemaining: totalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[]
}

  componentDidMount(){
    // fetch(paraURL)
    // .then((response)=>response.text())
    // .then((data)=>{//console.log(data);
    //   this.setState({selectedParagraph:data})
    // });

    const selectedParagraphArray = this.state.selectedParagraph.split("")
    // console.log( "splitted para -",selectedParagraphArray)
    const testInfo = selectedParagraphArray.map((selectedLetter)=>{
      return {
        testLetter:selectedLetter,
        status:"notAttempted",
      };
    })
    this.setState({testInfo})
  }

   handleUserInput = (inputValue) => {
    console.log(inputValue) 

   }

    render(){
      console.log("Test Info -", this.state.testInfo);
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
    

      return(
        <div className='App'>
        {/* NavBar */}
         <Navbar /> 
          
        {/* LandingPage */}
        <LandingPage />

        {/* challenge-section */}
        <ChallengeSection
         selectedParagraph = {this.state.selectedParagraph}
         words = {this.state.words}
         characters = {this.state.characters}
         wpm = {this.state.wpm }
         timeRemaining = {this.state.timeRemaining}
         timeStarted = {this.state.timeStarted}
         testInfo={this.state.testInfo}
         onInputChange={this.handleUserInput}

         />


        {/* Footer */}
        <Footer />
        </div>
      );
    }

}

export default App;

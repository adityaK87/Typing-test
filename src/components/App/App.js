import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import './App.css';
import Footer from '../Footer/Footer';

class App extends React.Component{

    render(){
      return(
        <div className='App'>
        {/* NavBar */}
         <Navbar /> 
          
        {/* LandingPage */}
        <LandingPage />

        {/* challenge-section */}
        {/* Footer */}
        <Footer />
        </div>
      );
    }

}

export default App;

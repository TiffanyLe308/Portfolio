import React, { Component } from 'react';
import Header from './components/header/header';
import AboutMe from './components/about-me/about-me';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';

import './css/general.css';
// import './css/fonts.css';

class App extends Component {
  render() { 
    return (
      <div className="App">   
        <Header />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div> 
    );
  }
}

export default App;

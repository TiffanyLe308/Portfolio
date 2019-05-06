import React, { Component } from 'react';
import Header from './components/header/header';
import AboutMe from './components/about-me/about-me';
import PortfolioDemo from './components/portfolio/portfolio-demo';
import Footer from './components/footer/footer';

import './css/general.css';
// import './css/fonts.css';

class App extends Component {
  render() { 
    return (
      <div className="App">   
        <Header />
        <AboutMe />
        <PortfolioDemo />
        <Footer />
      </div> 
    );
  }
}

export default App;

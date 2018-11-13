import React, { Component } from 'react';
import Header from './components/header/header';
import AboutMe from './components/about-me/about-me';
import Portfolio from './components/portfolio/portfolio';
import ContactMe from './components/contact-me/contact-me';
import Footer from './components/footer/footer';

class App extends Component {
  render() { 
    return (
      <div className="App">   
        <Header />
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </div>
    );
  }
}

export default App;

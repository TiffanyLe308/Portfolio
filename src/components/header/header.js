import React, { Component } from 'react';
import './navbar-transition.js';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Tiffany Le.</h1>
            <h2>I'm a frontend developer who love to create <span>awesome</span> and <span>effective visual identities</span> for companies of all sizes around the globe.
              Let's learn more <a className="smoothscroll" href="#about">about me</a>.</h2>
            <hr />
            <ul className="social">
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
import React, { Component } from 'react';
import './about.css';

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>About Me</h3>
                                <p>I am a conscientious person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills and eager to learn from others.
                            I am able to take on the responsibility to work both independently or as a part of a team, and have the enthusiasm as well as determination to ensure that I make a success of it.</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h3>Contact Details</h3>
                                <p className="address">
                                    <span>Tiffany Le</span><br />
                                    <span>tiffanyle308@gmail.com</span>
                                </p>
                                <div className="download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 download">
                                <p>
                                    Or you can send me message here <a href="#" className="button"><i className="fa fa-envelope mr-0" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="resume">
                    <div className="container">
                        <div className="row education">
                            <div className="col-md-3">
                                <h3>
                                    <span>Education</span>
                                </h3>
                            </div>
                            <div className="col-md-9">
                                <div className="row item">
                                    <div className="col-md-12">
                                        <h3>Arcada University of Applied Science</h3>
                                        <p className="info">Bachelor's Degree in BIT
                                    <span>•</span>
                                            <em className="date">Graduated December 2013</em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row work">
                            <div className="col-md-3">
                                <h3>
                                    <span>Work</span>
                                </h3>
                            </div>
                            <div className="col-md-9">
                                <div className="row item">
                                    <div className="col-md-12 columns">
                                        <h3>Fellow Finance Oy</h3>
                                        <p className="info">Frontend Developer
                                    <span>•</span>
                                            <em className="date">May 2017 - Present</em>
                                        </p>
                                        <p>
                                            <ul>
                                                <li>Providing website maintenance and enhancements (work mainly with HTML5, Less, Bootstrap3 & 4, jQuery, C#).</li>
                                                <li>Creating cascading style sheets (CSS3) that are consistent across all browsers and platforms.</li>
                                                <li>Maintaining graphic standards and branding throughout the product’s interface. </li>
                                                <li>Collaborating with other team members.</li>
                                            </ul>             </p>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="col-md-12 columns">
                                        <h3 className="mt-3">Aido</h3>
                                        <p className="info">Frontend Developer
                                    <span>•</span>
                                            <em className="date">November 2018 - Present</em>
                                        </p>
                                        <p><ul>
                                            <li>A React project follow up with an App for Android and IOS</li>
                                            <li>I work mainly with HTML5, CSS3 (Grid and flex), Material UI, and React</li>
                                        </ul></p>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="col-md-12 columns">
                                        <h3 className="mt-3">Goly</h3>
                                        <p className="info">Junior Frontend Developer
                                    <span>•</span>
                                            <em className="date">June 2018 - Dec 2016</em>
                                        </p>
                                        <p><ul>
                                            <li>Supporting website maintenance and enhancements (work mainly with AngularJS, HTML5, Sass).</li>
                                            <li>Creating responsive website for all browsers and platforms.</li>
                                            <li>Maintaining the product’s interface and collaborating with other team members.</li>
                                        </ul></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row skill">
                            <div className="col-md-3">
                                <h3>
                                    <span>Skills</span>
                                </h3>
                            </div>
                            <div className="col-md-9">
                                <p className="info">I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge to learn new programming languages and frameworks.
                                    Coding is my hobby which I enjoy to waste time on every now and then.
                                </p>
                                <div className="bars">
                                    <ul className="skills">
                                        <li>
                                            <span className="bar-expand html5" />
                                            <em>HTML5</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand css" />
                                            <em>CSS3</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand jquery" />
                                            <em>jQuery</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand react" />
                                            <em>React</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand csharp" />
                                            <em>C#</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand wordpress" />
                                            <em>Wordpress</em>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>
            </div>
        );
    }
}
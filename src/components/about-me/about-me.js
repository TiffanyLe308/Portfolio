import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>About Me</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Jonathan Doe</span><br />
                                <span>1600 Amphitheatre Parkway<br />
                                    Mountain View, CA 94043 US
                                </span><br />
                                <span>(123)456-7890</span><br />
                                <span>anyone@website.com</span>
                            </p>
                        </div>
                        <div className="col-md-6 download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Jonathan Doe</span><br />
                                    <span>1600 Amphitheatre Parkway<br />
                                        Mountain View, CA 94043 US
                                </span><br />
                                    <span>(123)456-7890</span><br />
                                    <span>anyone@website.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <section id="resume">
                    <div className="container">
                        <div className="row education">
                            <div className="col-md-3 header-col">
                                <h1>
                                    <span>Education</span>
                                </h1>
                            </div>
                            <div className="col-md-9 main-col">
                                <div className="row item">
                                    <div className="col-md-12">
                                        <h3>Arcada University of Applied Science</h3>
                                        <p className="info">Bachelor's Degree in BIT
                                    <span>•</span>
                                            <em className="date">Graduate December 2013</em>
                                        </p>
                                        <p>
                                            I am a conscientious person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills and eager to learn from others.
                                            I am able to take on the responsibility to work both independently or as a part of a team, and have the enthusiasm as well as determination to ensure that I make a success of it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row work">
                            <div className="col-md-3 header-col">
                                <h1>
                                    <span>Work</span>
                                </h1>
                            </div>
                            <div className="col-md-9 main-col">
                                <div className="row item">
                                    <div className="col-md-12 columns">
                                        <h3>Fellow Finance Oy</h3>
                                        <p className="info">Front-end Developer
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
                                        <h3>Aido</h3>
                                        <p className="info">Front-end Developer
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
                                        <h3>Goly</h3>
                                        <p className="info">Junior Frontend Developer
                                    <span>•</span>
                                            <em className="date">November 2018 - Present</em>
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
                            <div className="col-md-3 header-col">
                                <h1>
                                    <span>Skills</span>
                                </h1>
                            </div>
                            <div className="col-md-9 main-col">
                                <p>I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge to learn new programming languages and frameworks.
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
                                            <span className="bar-expand wordpress" />
                                            <em>jQuery</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand illustrator" />
                                            <em>React</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand photoshop" />
                                            <em>C#</em>
                                        </li>
                                        <li>
                                            <span className="bar-expand jquery" />
                                            <em>Wordpress</em>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        );
    }
}
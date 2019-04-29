import React, { Component } from 'react';
import ContactMe from './contact-me.js';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <ContactMe />

                {/* <div className="container">
                    <div className="row">
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-chevron-up"></i></a></div>
                    </div>
                </div> */}
            </footer>
        );
    }
}
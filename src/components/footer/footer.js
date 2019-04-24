import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-chevron-up"></i></a></div>
                    </div>
                </div>
            </footer>
        );
    }
}
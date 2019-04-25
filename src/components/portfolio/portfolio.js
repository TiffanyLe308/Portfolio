import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 collapsed">
                            <h2>Check Out Some of My Works</h2>
                            <div id="portfolio-wrapper" className="row">
                                <div className="col-12 col-sm-3 col-md-4 portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" data-target="#modal-01" data-toggle="modal" title>
                                            <img alt src="images/portfolio/coffee.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>Coffee</h4>
                                                    <p>Illustrration</p>
                                                </div>
                                            </div>
                                            <div className="link-icon">
                                                <i className="fa fa-plus" />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-3 col-md-4 portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" data-target="#modal-02" data-toggle="modal" title>
                                            <img alt src="images/portfolio/console.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>Coffee</h4>
                                                    <p>Illustrration</p>
                                                </div>
                                            </div>
                                            <div className="link-icon">
                                                <i className="fa fa-plus" />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-3 col-md-4 portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" data-target="#modal-03" data-toggle="modal" title>
                                            <img alt src="images/portfolio/judah.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>Coffee</h4>
                                                    <p>Illustrration</p>
                                                </div>
                                            </div>
                                            <div className="link-icon">
                                                <i className="fa fa-plus" />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Modal content */}

                                <div id="modal-01" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <img className="img-fluid" src="images/portfolio/modals/m-coffee.jpg" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>Coffee Cup</h5>
                                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Branding, Webdesign
                                                </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a className="modal-dismiss" data-dismiss="modal"><i className="fa fa-times"></i>Close</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="modal-02" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <img className="img-fluid" src="images/portfolio/modals/m-console.jpg" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>Console</h5>
                                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Branding, Web Development
                                                </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a className="modal-dismiss" data-dismiss="modal"><i className="fa fa-times"></i>Close</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="modal-03" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <img className="img-fluid" src="images/portfolio/modals/m-judah.jpg" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>Judah</h5>
                                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Branding
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a className="modal-dismiss" data-dismiss="modal"><i className="fa fa-times"></i>Close</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
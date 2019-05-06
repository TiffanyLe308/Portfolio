import React, { Component } from 'react';
import './portfolio.css';

export default class PortfolioDemo extends Component {
    render() {
        return (
            <section id="portfolio-demo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 collapsed">
                            <h2>Check Out Some of My Works</h2>
                            <div id="portfolio-wrapper" className="row">
                                <div className="col-12 col-sm-3 col-md-4 portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" data-target="#modal-01" data-toggle="modal" title>
                                            <img alt src="images/portfolio/portfolio-ff.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>Fellow Finance</h4>
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
                                            <img alt src="images/portfolio/portfolio-aido.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>Aido</h4>
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
                                            <img alt src="images/portfolio/portfolio-more.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h4>More ?</h4>
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
                                            <img className="img-fluid" src="images/portfolio/modals/portfolio-m-ff.png" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>Fellow Finance</h5>
                                                    <p>Fellow Finance offers the most advanced marketplace lending platform in Europe. Both individuals and business can find funding for their needs in our platform and investors receive interest for their money lent.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Web Development, Web App
                                                </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="https://www.fellowfinance.fi/" target="_blank">Details</a>
                                                <a className="modal-dismiss" data-dismiss="modal"><i className="fa fa-times"></i>Close</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="modal-02" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <img className="img-fluid" src="images/portfolio/modals/portfolio-m-aido.jpg" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>Aido</h5>
                                                    <p>Aido Healthcare is a Finnish company, founded in 2016, aiming to digitalise and improve the evidence based treatment of schizophrenia and psychosis patients.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Web Development, App Development
                                                </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="https://www.aido.io/" target="_blank">Details</a>
                                                <a className="modal-dismiss" data-dismiss="modal"><i className="fa fa-times"></i>Close</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="modal-03" className="modal fade">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <img className="img-fluid" src="images/portfolio/modals/portfolio-m-more.jpg" alt />
                                            <div className="modal-body">
                                                <div className="description-box">
                                                    <h5>More challenge</h5>
                                                    <p>I enjoy spending my spare time sharpening my front-end skills, if you are like me and have a passion for web development, you'll feel right at home here on my page.</p>
                                                    <span className="categories">
                                                        <i className="fa fa-tag" />Freeylance, Challenge
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="link-box">
                                                <a href="#">Details</a>
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
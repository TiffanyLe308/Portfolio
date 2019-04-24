import React, { Component } from 'react';

export default class ContactMe extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div className="container">
                        <div className="row section-head">
                            <div className="col-md-2">
                                <h2><span></span></h2>
                            </div>
                            <div className="col-md-10">
                                <form action method="post" id="contactForm" name="contactForm">
                                    <fieldset>
                                        <div>
                                            <label htmlFor="contactName">Name <span className="required">*</span></label>
                                            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                                        </div>
                                        <div>
                                            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                                        </div>
                                        <div>
                                            <label htmlFor="contactSubject">Subject</label>
                                            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                                        </div>
                                        <div>
                                            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                        </div>
                                        <div>
                                            <button className="submit">Submit</button>
                                            <span id="image-loader">
                                                <img alt src="images/loader.gif" />
                                            </span>
                                        </div>
                                    </fieldset>
                                </form>

                                <div id="message-warning"> Error boy</div>

                                <div id="message-success">
                                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
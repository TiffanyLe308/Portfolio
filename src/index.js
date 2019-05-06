import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Portfolio from './components/portfolio/portfolio-demo';

import * as serviceWorker from './serviceWorker';

import './index.css';
import './css/general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const routing = (
    <Router>
        <div>
            <nav id="nav-wrap" class="">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse container show" id="navBar">
                    <ul id="nav" className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={App} />
            <Route path="/portfolio" component={Portfolio} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

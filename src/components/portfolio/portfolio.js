import React, { Component } from 'react';
import {PortfolioBusinessList} from './portfolio-business-list';
import PortfolioSearchBar from './portfolio-search-bar';

import './portfolio.css';

const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const businesses = [business, business, business, business, business, business, business, business, business];

export default class Portfolio extends Component {
    searchYelp(business, location, sortBy) {
        console.log(`Searching Yelp with ${business}, ${location}, ${sortBy}`);
    }

    render() {
        return (
            <section id="portfolio">
                <PortfolioSearchBar searchYelp={this.searchYelp}/>
                <PortfolioBusinessList businesses={businesses} />
            </section>
        );
    }
}

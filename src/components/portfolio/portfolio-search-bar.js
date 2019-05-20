import React, { Component } from 'react';

import './portfolio.css';

export default class PortfolioSearchBar extends Component {
    renderSortByOptions() {
        const sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }

        return (
            Object.keys(sortByOptions).map(sortByOption => {
                const sortByOptionValue = sortByOptions[sortByOption];
                return <li key={sortByOptionValue}>{sortByOption}</li>;
            })
        );
    }

    render() {
        return (
            <div id="portfolio-search-bar">
                <div className="searchBar">
                    <div className="searchBar-sort-options">
                        <ul>
                            {/* Use .renderSortByOptions() to sort the businesses by their options */}
                            {this.renderSortByOptions()}
                        </ul>
                    </div>
                    <div className="searchBar-fields">
                        <input placeholder="Search Businesses" />
                        <input placeholder="Where?" />
                    </div>
                    <div className="searchBar-submit">
                        <a>Let's Go</a>
                    </div>
                </div>
            </div>
        );
    }
}

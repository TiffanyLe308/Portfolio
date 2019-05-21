import React, { Component } from 'react';

import './portfolio.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

export default class PortfolioSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: '',
            location: '',
            sortBy: 'best_match'
        };
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange = (sortByOption) => (event) => {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleBusinessChange = (e) => {
        this.setState({
            business: e.target.value
        });
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleSearch = (e) => {
        this.props.searchYelp(this.state.business, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    renderSortByOptions() {
        return (
            Object.keys(sortByOptions).map(sortByOption => {
                const sortByOptionValue = sortByOptions[sortByOption];
                return (
                    <li className={this.getSortByClass(sortByOptionValue)}
                        key={sortByOptionValue}
                        onClick={this.handleSortByChange(sortByOptionValue)}
                    >{sortByOption}</li>
                );
            })
        );
    }

    render() {
        return (
            <div id="portfolio-search-bar">
                <div className="searchBar">
                    <div className="searchBar-sort-options">
                        <ul>
                            {this.renderSortByOptions()}
                        </ul>
                    </div>
                    <div className="searchBar-fields">
                        <input
                            placeholder="Search business"
                            onChange={this.handleBusinessChange} />
                        <input
                            placeholder="Where?"
                            onChange={this.handleLocationChange} />
                    </div>
                    <div className="searchBar-submit">
                        <a onClick={this.handleSearch}>Let's Go</a>
                    </div>
                </div>
            </div>
        );
    }
}

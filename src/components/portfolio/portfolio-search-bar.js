import React, { Component } from 'react';

import './portfolio.css';

export default class PortfolioSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleBusinessChange = this.handleBusinessChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleBusinessChange(e) {
        this.setState({
            business: e.target.value
        });
    }

    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.business, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    renderSortByOptions() {
        return (
            Object.keys(this.sortByOptions).map(sortByOption => {
                const sortByOptionValue = this.sortByOptions[sortByOption];
                return (
                    <li className={this.getSortByClass(sortByOptionValue)}
                        key={sortByOptionValue}
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
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

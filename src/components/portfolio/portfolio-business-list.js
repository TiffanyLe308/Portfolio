import React, { Component } from 'react';
import PortfolioBusiness from './portfolio-business';

import './portfolio.css';

export default class PortfolioBusinessList extends Component {
    render() {
        return (
            <div id="portfolio-business-list">
                {
                    this.props.businesses.map(business => {
                        return <PortfolioBusiness business={business} />;
                    })
                }
            </div>
        );
    }
}

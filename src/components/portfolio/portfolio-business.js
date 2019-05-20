import React, { Component } from 'react';

import './portfolio.css';

// export default class PortfolioBusiness extends Component {
//     render() {
//         const business = this.props.business;

//         return (
//             <div id="portfolio-business">
//                 <div className="image-container">
//                     <img src={business.imageSrc} alt='' />
//                 </div>
//                 <h2>MarginOtto Pizzeria</h2>
//                 <div className="business-information">
//                     <div className="business-address">
//                         <p>{business.address}</p>
//                         <p>{business.city}</p>
//                         <p>{business.zipCode}</p>
//                     </div>
//                     <div className="business-reviews">
//                         <h3>{business.category}</h3>
//                         <h3 className="business-rating">{business.rating}</h3>
//                         <p>{business.reviewCount}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// a normal way to write stateless component or destructive input object at pass in parameter is below
// export const PortfolioBusiness = () => {
//     const business = props.business;
//     or const {business} = props.business;
// }

export const PortfolioBusiness = ({ business }) => {
    return (
        <div id="portfolio-business">
            <div className="image-container">
                <img src={business.imageSrc} alt='' />
            </div>
            <h2>MarginOtto Pizzeria</h2>
            <div className="business-information">
                <div className="business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.zipCode}</p>
                </div>
                <div className="business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="business-rating">{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

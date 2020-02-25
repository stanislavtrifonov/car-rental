import React from 'react';
import './PriceEstimationCard.css';

const PriceEstimationCard = (props) => (
  <div className="priceEstimationCard">
    <h1>Estimated Price</h1>
    <div className="priceItem">
      <h4>Days</h4>
      <h4>5</h4>
    </div>
    <div className="priceItem">
      <h4>Price per day</h4>
      <h4>5$</h4>
    </div>
    <div className="priceItem">
      <h4>Total Price</h4>
      <h4>5$</h4>
    </div>
  </div>
);

export default PriceEstimationCard;

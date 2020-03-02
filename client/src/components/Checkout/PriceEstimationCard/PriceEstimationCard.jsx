import React from 'react';
import './PriceEstimationCard.css';
import * as priceCalculations from '../../../services/PriceCalculations';

const PriceEstimationCard = ({ priceEstimationForm }) => {
  const numberOfDays = priceCalculations.estimatedDaysRented(priceEstimationForm.checkoutForm.startDate, priceEstimationForm.checkoutForm.contractEndDate);
  const daysDiscount = priceCalculations.estimatedDaysDiscount(numberOfDays);
  const basePriceMock = 100;
  const priceAfterDaysDiscount = basePriceMock * daysDiscount;
  const agePenalty = priceCalculations.estimatedAgeDiscount(priceEstimationForm.checkoutForm.borrowerAge);
  const priceAfterDaysAndAge = agePenalty * priceAfterDaysDiscount;
  const totalPrice = priceAfterDaysAndAge * numberOfDays;
  console.log(priceEstimationForm.car);
  return (
    <div className="priceEstimationCard">
      <h1>Estimated Price</h1>
      <div className="priceItem">
        <h4>Days</h4>
        <h4>{numberOfDays}</h4>
      </div>
      <div className="priceItem">
        <h4>Daily price</h4>
        <h4>
          {basePriceMock}
          $
        </h4>
      </div>
      <br />
      <div className="priceItem">
        <h4>
          Days Discount:
          <h4>
            -
            {((1 - daysDiscount) * 100).toFixed(0)}
            %
          </h4>
        </h4>
        <h4>
          {priceAfterDaysDiscount}
          $
        </h4>
      </div>
      <div className="priceItem">
        <h4>
          Age Penalty:
          <h4>
            +
            {((agePenalty - 1) * 100).toFixed(0)}
            %
          </h4>
        </h4>
        <h4>
          {priceAfterDaysAndAge}
          $
        </h4>
      </div>
      <br />
      <div className="priceItem">
        <h4>Final daily price</h4>
        <h4>{priceAfterDaysAndAge}</h4>
      </div>
      <br />
      <div className="priceItem">
        <h4>Total Price</h4>
  <h4>{totalPrice}$</h4>
      </div>
    </div>
  );
};


export default PriceEstimationCard;

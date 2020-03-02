import React from 'react';
import { Button } from 'react-bootstrap';
import * as priceCalculations from '../../../services/PriceCalculations';

const DashboardItem = (props) => {
  const estimatedNumberOfDays = priceCalculations.estimatedDaysRented(props.contract.startDate, props.contract.contractEndDate);
  const currentNumberOfDays = priceCalculations.currentDaysRented(props.contract.startDate);
  const daysDiscount = priceCalculations.estimatedDaysDiscount(estimatedNumberOfDays);
  const basePriceMock = 100;
  const priceAfterDaysDiscount = basePriceMock * daysDiscount;
  const agePenalty = priceCalculations.estimatedAgeDiscount(props.contract.borrowerAge);
  const priceAfterDaysAndAge = agePenalty * priceAfterDaysDiscount;
  const estimatedTotalPrice = priceAfterDaysAndAge * estimatedNumberOfDays;
  const daysOverUnderContract = priceCalculations.daysOverUnderContract(props.contract.startDate, props.contract.contractEndDate);
  const overduePenalty = priceCalculations.overduePenalty(daysOverUnderContract);
  const currentTotalPrice = estimatedTotalPrice + (overduePenalty * daysOverUnderContract * priceAfterDaysDiscount)
  const currentPricePerDay = overduePenalty * priceAfterDaysDiscount
  console.log(props.contract.startDate);
  return (
    <tr>
      <td>#</td>
      <td>
        {props.contract.__car__.brand}
        {' '}
        {props.contract.__car__.model}
      </td>
      <td>{props.contract.borrowerFirstName}</td>
      <th>
        {props.contract.borrowerLastName}
        {' '}
      </th>
      <td>{props.contract.startDate}</td>
      <td>{props.contract.contractEndDate}</td>
      <td>{estimatedNumberOfDays}</td>
      <td>
        {priceAfterDaysAndAge}
      </td>
      <td>{currentNumberOfDays}</td>
      <td>{daysOverUnderContract}</td>
      <td>{currentPricePerDay}</td>
      <td>{currentTotalPrice}</td>
      <Button variant="outline-success">Return car</Button>
    </tr>
  );
};


export default DashboardItem;

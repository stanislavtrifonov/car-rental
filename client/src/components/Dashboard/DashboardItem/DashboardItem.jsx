import React from 'react';
import { Button } from 'react-bootstrap';
import * as priceCalculations from '../../../services/PriceCalculations';

const DashboardItem = (props) => (
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
    <td>{priceCalculations.estimatedDaysRented(props.contract.startDate, props.contract.contractEndDate)}</td>
    <td>
      {priceCalculations.estimatedPricePerDay(priceCalculations.estimatedDaysRented(
        props.contract.startDate,
        props.contract.contractEndDate,
      ),
      props.contract.borrowerAge,
      props.contract.__car__.__className__.price)}
    </td>
    <td>{priceCalculations.currentDaysRented(props.contract.startDate)}</td>
    <td>Currenty</td>
    <td>Current</td>
    <Button variant="outline-success">Return car</Button>
  </tr>
);

export default DashboardItem;

import React from 'react';
import { Button } from 'react-bootstrap';

const DashboardItem = (props) => (
  <tr>
    <td>#</td>
    <td>Car</td>
    <td>{props.contract.borrowerFistName}</td>
    <th>{props.contract.borrowerLastName} </th>
    <td>{props.contract.borrowerLastName}</td>
    <td>{props.contract.startDate}</td>
    <td>Estimat</td>
    <td>Current</td>
    <td>Currenty</td>
    <td>Current</td>
    <Button variant="outline-success">Return car</Button>
  </tr>
);

export default DashboardItem;

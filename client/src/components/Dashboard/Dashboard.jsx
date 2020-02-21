import React from 'react';
import Table from 'react-bootstrap/Table';
import './Dashboard.css';
import DashboardItem from './DashboardItem/DashboardItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentedCars: ['a', 'a', 'a'],
    };
  }



  render() {
    const rentedCards = this.state.rentedCars.map((car) => <DashboardItem />);

    return (
      <div className="container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Car</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>From</th>
              <th>Estimated Days Rented</th>
              <th>Estimated Price per Day</th>
              <th>Current Days Rented</th>
              <th>Current Price per Day</th>
              <th>Current Total Price</th>
              <th>Return Car</th>
            </tr>
          </thead>
          <tbody>
            {rentedCards}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;

import React from 'react';
import Table from 'react-bootstrap/Table';
import './Dashboard.css';
import DashboardItem from './DashboardItem/DashboardItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/contracts')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          contracts: result,
        });
        console.log(result);
      });
  }


  render() {
    const contracts = this.state.contracts.map((contract) => <DashboardItem key={contract.id} contract={contract} />);

    return (
      <div className="containerTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Car</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>From</th>
              <th>Estimated Return Date</th>
              <th>Estimated Days Rented</th>
              <th>Estimated Price per Day</th>
              <th>Current Days Rented</th>
              <th>Current Price per Day</th>
              <th>Current Total Price</th>
              <th>Return Car</th>
            </tr>
          </thead>
          <tbody>
            {contracts}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;

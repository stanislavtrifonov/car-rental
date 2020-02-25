import React from 'react';
import AvailableCarCard from './AvailableCarCard/AvailableCarCard';
import './AvailableCarsContainer.css';
import * as moment from 'moment';

class AvailableCarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/cars')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cars: result,
        });
        console.log(result);
      });
    const test = moment(new Date()).format('YYYY-MM-DD HH:mm');
    console.log(test);
  }

  render() {
    const cars = [...this.state.cars];
    const cards = cars.map((car) => <AvailableCarCard key={car.id} car={car} />);

    return (
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
}

export default AvailableCarsContainer;

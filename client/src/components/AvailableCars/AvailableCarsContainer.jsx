import React from "react";
import AvailableCarCard from "./AvailableCarCard/AvailableCarCard";
import "./AvailableCarsContainer.css";

class AvailableCarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cars/available")
      .then(res => res.json())
      .then(result => {
        this.setState({
          cars: result
        });
        console.log(result);
      });
  }

  render() {
    const cars = [...this.state.cars];
    const cards = cars.map(car => <AvailableCarCard key={car.id} car={car} />);

    return (
      <div className="container">
        <div className='row'>
          {cards}
        </div>
      </div>
    );
  }
}

export default AvailableCarsContainer;

import React from 'react';
import * as moment from 'moment';
import CheckoutCarCard from './CheckoutCarCard/CheckoutCarCard';
import './CheckoutPage.css';
import BookingForm from './BookingForm/BookingForm';
import PriceEstimationCard from './PriceEstimationCard/PriceEstimationCard';



export default class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          car: result,
        });
        console.log(result);
      });
      const time = (moment(new Date()).format('YYYY-MM-DDThh:mm'))
      console.log(time)
  }

  render() {
    const car = { ...this.state.car };
    const { carId } = this.props.match.params;
    console.log(car);
    return (
      <div className="checkoutMainContainer">
        <h1>Checkout rental car</h1>
        <div className="formItems">
          <CheckoutCarCard car={car} />
          <BookingForm car={car} />
          <PriceEstimationCard car={car} />
        </div>

      </div>
    );
  }
}

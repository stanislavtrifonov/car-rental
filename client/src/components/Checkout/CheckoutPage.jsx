import React from 'react';
import * as moment from 'moment';
import CheckoutCarCard from './CheckoutCarCard/CheckoutCarCard';
import './CheckoutPage.css';
import BookingForm from './BookingForm/BookingForm';
import PriceEstimationCard from './PriceEstimationCard/PriceEstimationCard';
import { toast } from "react-toastify";


export default class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
      checkoutForm: {
        borrowerFirstName: null,
        borrowerLastName: null,
        borrowerAge: null,
        startDate: null,
        contractEndDate: null,
    }
    };
  }

  carCheckoutHandler = (event) => {
    const name = event.target.dataset.name;
    const value = event.target.value;
    const newObj = {};
    newObj[name] = value;
    newObj.startDate = moment(new Date()).format('YYYY-MM-DDTHH:mm');

    this.setState({
        checkoutForm: Object.assign(this.state.checkoutForm, newObj),
    })


    console.log(this.state.checkoutForm)
  }


  onInputSubmit = (event) => {
    event.preventDefault();

    if(moment(this.state.checkoutForm.startDate).format('YYYY-MM-DDTHH:mm') > moment(this.state.checkoutForm.contractEndDate).format('YYYY-MM-DDTHH:mm') ) {
      toast.error("Return date cannot be in the past", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }

    fetch(`http://localhost:3000/contracts/car/${this.state.car.id}`, {
      method: "POST",
      body: JSON.stringify(this.state.checkoutForm),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const { id }= this.props.match.params;
    fetch(`http://localhost:3000/cars/${id}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          car: result,
        });
        console.log(result);
      });
  }

  render() {
    const car = { ...this.state.car };
    console.log(car);
    return (
      <div className="checkoutMainContainer">
        <h1>Checkout rental car</h1>
        <div className="formItems">
          <CheckoutCarCard car={car} />
          <BookingForm car={car} changed={this.carCheckoutHandler} onInputSubmit={this.onInputSubmit} />
          <PriceEstimationCard car={car} />
        </div>
      </div>
    );
  }
}

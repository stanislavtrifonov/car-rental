import React from 'react';
import Form from 'react-bootstrap/Form';
import {
  Row, Col, Grid, Button, InputGroup,
} from 'react-bootstrap';
import './BookingForm.css';
import * as moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checkoutForm: {
            borrowerFirstName: null,
            borrowerLastName: null,
            borrowerAge: null,
            startDate: null,
            contractEndDate: null,
        }
    };
  }

  onInputChange = (event) => {
    const name = event.target.dataset.name;
    const value = event.target.value;
    const newObj = {};
    newObj[name] = value;
    newObj.startDate = moment(new Date()).format('YYYY-MM-DD HH:mm');
    console.log(this.props.car.id)
    this.setState({
        checkoutForm: Object.assign(this.state.checkoutForm, newObj),
    })


    console.log(this.state.checkoutForm)
  }

  onInputSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/contracts/car/${this.props.car.id}`, {
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


  render() {
    return (
      <Form className="checkoutFormContainer">
        <h1>Booking</h1>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              data-name="borrowerFirstName"
              onChange={this.onInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              data-name="borrowerLastName"
              onChange={this.onInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>Age</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Age" 
            defaultValue="18"
            required
            data-name="borrowerAge"
            onChange={this.onInputChange}
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Return Date</Form.Label>
            <Form.Control 
            type="datetime-local" 
            required
            data-name="contractEndDate"
            defaultValue="2019-02-12T19:30"
            onChange={this.onInputChange}
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button onClick={this.onInputSubmit}>Book</Button>
        <Button >Cancel</Button>
      </Form>
    );
  }
}

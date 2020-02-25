import React from 'react';
import Form from 'react-bootstrap/Form';
import {
  Row, Col, Grid, Button, InputGroup,
} from 'react-bootstrap';
import './BookingForm.css';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      returnDate: null,
    };
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
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>Return Date</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    );
  }
}

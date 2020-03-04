import React from 'react';
import Form from 'react-bootstrap/Form';
import {
  Col, Button,
} from 'react-bootstrap';
import './BookingForm.css';
import * as moment from 'moment';
import { Link } from 'react-router-dom';


const BookingForm = (props) => (
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
          onChange={props.changed}
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
          onChange={props.changed}
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
          onChange={props.changed}
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
          defaultValue={moment(new Date()).format('YYYY-MM-DDTHH:mm')}
          min={moment(new Date()).format('YYYY-MM-DDThh:mm')}
          onChange={props.changed}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid date.
        </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>
    <Button variant="outline-success" onClick={props.onInputSubmit}>
      <Link to="/home">Checkout</Link>
    </Button>
    <Button variant="outline-success">Cancel</Button>
  </Form>
);

export default BookingForm;

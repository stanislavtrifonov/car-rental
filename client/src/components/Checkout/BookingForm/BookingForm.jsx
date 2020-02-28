import React from 'react';
import Form from 'react-bootstrap/Form';
import {
  Col, Button
} from 'react-bootstrap';
import './BookingForm.css';
import * as moment from 'moment';
import { toast } from "react-toastify";

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     checkoutForm: {
    //         borrowerFirstName: null,
    //         borrowerLastName: null,
    //         borrowerAge: null,
    //         startDate: null,
    //         contractEndDate: null,
    //     }
    // };
  }

  onInputChange = (event) => {
    // const name = event.target.dataset.name;
    // const value = event.target.value;
    // const newObj = {};
    // newObj[name] = value;
    // newObj.startDate = moment(new Date()).format('YYYY-MM-DDTHH:mm');
    // console.log(this.props.car.id)
    // this.setState({
    //     checkoutForm: Object.assign(this.state.checkoutForm, newObj),
    // })


    // console.log(this.state.checkoutForm)
  }

  // onInputSubmit = (event) => {
  //   event.preventDefault();

  //   if(moment(this.state.checkoutForm.startDate).format('YYYY-MM-DDTHH:mm') > moment(this.state.checkoutForm.contractEndDate).format('YYYY-MM-DDTHH:mm') ) {
  //     toast.error("Return date cannot be in the past", {
  //       position: toast.POSITION.BOTTOM_RIGHT
  //     });
  //     console.log('test')

  //   }
  //   console.log(this.state.checkoutForm.startDate)
  //   console.log(this.state.checkoutForm.contractEndDate)


  //   fetch(`http://localhost:3000/contracts/car/${this.props.car.id}`, {
  //     method: "POST",
  //     body: JSON.stringify(this.state.checkoutForm),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(data => data.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  // }


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
              onChange={this.props.changed}
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
              onChange={this.props.changed}
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
            onChange={this.props.changed}
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
            onChange={this.props.changed}
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button onClick={this.props.onInputSubmit}>Book</Button>
        <Button >Cancel</Button>
      </Form>
    );
  }
}

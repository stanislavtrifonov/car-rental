import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AvailableCarCard.css';

const AvailableCarCard = (props) => (
  <>
  <Card className="col-lg-3 col-md-6">
    <Card.Img
      variant="top"
      src={props.car.picture}
    />
    <Card.Body>
      <Card.Title>{props.car.model}</Card.Title>
      <Card.Text>
      {props.car.brand}
      </Card.Text>
      <Card.Text>
        Class {props.car.__className__.className}
      </Card.Text>
      <Card.Text>
        Price per day 38$
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>
  </>
);

export default AvailableCarCard;

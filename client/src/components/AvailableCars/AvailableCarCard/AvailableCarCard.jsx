import React from 'react';
import { Card } from 'react-bootstrap';
import './AvailableCarCard.css';
import { Link } from 'react-router-dom';

const AvailableCarCard = (props) => (
  <div className="col-lg-3 col-md-6">
    <Card className="card">
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
          Class
          {' '}
          {props.car.__className__.className}
        </Card.Text>
        <Card.Text>
          Price per day 38$
        </Card.Text>
        <Link to={'/cars/' + props.car.id}>Checkout</Link>
      </Card.Body>
    </Card>
  </div>
);

export default AvailableCarCard;

import React from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: 'test',
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    fetch('http://localhost:3000/cars/' + id)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cars: result,
        });
        console.log(result)
      });
  }

  render() {
    return <div>TESTING</div>;
  }
}

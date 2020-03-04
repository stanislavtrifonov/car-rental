import React from 'react';
import {
  Button, Navbar, Form, FormControl, Nav,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NavigationBarCars = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="brand" href="/home">Awesome Cars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Button variant="link"><Link to="/home">Cars</Link></Button>
        <Button variant="link"><Link to="/dashboard">Dashboard</Link></Button>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBarCars;

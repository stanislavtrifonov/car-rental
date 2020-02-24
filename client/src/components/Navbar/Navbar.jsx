import React from 'react';
import {
  Button, Navbar, Form, FormControl, Nav,
} from 'react-bootstrap';
import './Navbar.css';

const NavigationBarCars = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="brand" href="/home">Awesome Cars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Cars</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBarCars;

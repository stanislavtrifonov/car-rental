import React from 'react';
import {
  Button, Navbar, NavDropdown, Form, FormControl, Nav,
} from 'react-bootstrap';
import {Link} from 'react-router';
import { Route } from 'react-router-dom';
import AvailableCarsContainer from '../AvailableCars/AvailableCarsContainer';

const NavigationBarCars = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Awesome Cars</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Cars</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBarCars;

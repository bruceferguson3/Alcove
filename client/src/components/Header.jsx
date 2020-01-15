import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = props => {
  return (
    <header className="it-header">
      <Navbar bg="dark" variant="dark">
        <div className="logo-container">
          <img className="it-logo" src="../../assets/alcove.jpg" alt="Alcove Logo" />
          <span className="logo-text">Alcove</span>
        </div>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Reviews</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Enter zip code" className="mr-sm-2" />
          <Button variant="outline-primary">Find Items/Units</Button>
          <Button variant="outline-secondary">Post Items/Units</Button>
        </Form>
      </Navbar>
    </header>
  );
};

const handleScroll = evt => {
  console.log(evt);
};

export default Header;

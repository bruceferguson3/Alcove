import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = props => {
  return (
    <header className="it-header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <div className="logo-container">
            <img className="it-logo" src="../../assets/alcove.jpg" alt="Alcove Logo" />
            <span className="logo-text">Alcove</span>
          </div>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <IndexLinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </IndexLinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features">
            <Nav.Link>Features</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
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

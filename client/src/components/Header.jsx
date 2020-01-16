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
    <div className="it-header-container">
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
              <Nav.Link onClick={() => props.changePath('/')}>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/team">
              <Nav.Link onClick={() => props.changePath('/teams')}>Our Team</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/features">
              <Nav.Link onClick={() => props.changePath('/features')}>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link onClick={() => props.changePath('/contact')}>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          {props.path !== '/' ? (
            <Form inline>
              <FormControl type="text" placeholder="Enter zip code" className="mr-sm-2 it-search" />
              <Button variant="primary" className="it-btn-header it-btn-primary">
                Find Items/Units
              </Button>
              <Button variant="secondary" className="it-btn-header it-btn-secondary">
                Post Items/Units
              </Button>
            </Form>
          ) : null}
        </Navbar>
      </header>
    </div>
  );
};

export default Header;

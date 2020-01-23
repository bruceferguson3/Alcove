import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

const Footer = props => {
  return (
    <footer className="footer">
      <Container className="it-footer-container" fluid="md">
        <Row>
          <Col>
            <Navbar.Brand>
              <img src="../../assets/alcove-footer.jpg" alt="Alcove Logo" className="it-footer-logo" onClick={props.returnToTop} />
            </Navbar.Brand>
          </Col>
          <Col>
            <h3 className="it-footer-title">Guarantee</h3>
            <p className="it-footer-p">
              At Alcove we believe you shouldn't have to worry about your stored items. We will treat your items like they're our own. That's the full
              Alcove guarantee.
            </p>
          </Col>
          <Col>
            <h3 className="it-footer-title">Services</h3>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Company History
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                About Us
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Jobs
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Report Spam
              </a>
            </p>
          </Col>
          <Col>
            <h3 className="it-footer-title">Legal</h3>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Terms &amp; Conditions
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Privacy Policy
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="#">
                Pricing
              </a>
            </p>
          </Col>
          <Col>
            <h3 className="it-footer-title">Contact</h3>
            <p className="it-footer-p">
              <a href="https://goo.gl/maps/TY6E1Eb7mLWghxA39" className="it-footer-links">
                119 Nueces Street
                <br />
                Austin, TX 78701
              </a>
            </p>
            <p className="it-footer-p">
              <a className="it-footer-links" href="mailto:teamalcove@gmail.com">
                teamalcove@gmail.com
              </a>
            </p>
            <p className="it-footer-p">
              <a href="tel:5127175244" className="it-footer-links">
                512-717-5244
              </a>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <p className="it-footer-p">Copyright &copy; 2020 Alcove Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

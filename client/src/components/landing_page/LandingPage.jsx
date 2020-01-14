import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LandingPage.css';

const LandingPage = props => (
  <>
    <section className="it-section-1">
      <Jumbotron className="it-jt">
        <div className="it-cta-text">
          <h1>Alcove is here for all your storage needs!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
        <div className="it-cta-form">
          <p>
            <Form.Control type="text" placeholder="Enter zip code" className="it-search-input" />
          </p>
          <p>
            <Button variant="primary">Find Storage Units</Button>
          </p>
        </div>
        <img className="it-cta-image" src="http://zooki.react.themesbrand.com/images/home-2-img.png" alt="image" />
      </Jumbotron>
    </section>
    <section className="it-section-2"></section>
    <section className="it-section-3"></section>
  </>
);

export default LandingPage;

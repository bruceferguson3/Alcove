import React from 'react';
import Form from 'react-bootstrap/Form';
import './LandingPage.css';

const LandingPage = props => (
  <>
    <section className="it-section-1">
      <div className="it-container">
        <div className="it-cta-text">
          <h1>Alcove is here for all your storage needs!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
        <div className="it-cta-form">
          <Form.Control type="text" placeholder="Enter zip code" className="it-search-input" />
          <button variant="outline-primary" className="btn btn-outline-primary it-btn">
            Find Storage Units
          </button>
          <button variant="outline-secondary" className="btn btn-outline-secondary it-btn">
            Post Items
          </button>
        </div>
      </div>
      <div className="it-image">
        <img className="it-cta-image" src="http://zooki.react.themesbrand.com/images/home-2-img.png" alt="image" />
      </div>
    </section>
    <section className="it-section-2"></section>
    <section className="it-section-3"></section>
  </>
);

export default LandingPage;

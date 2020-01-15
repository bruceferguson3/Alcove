import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './LandingPage.css';

const LandingPage = ({ search, change, newZip }) => {
  const history = useHistory();

  return (
    <>
      <section className="it-section-1">
        <div className="it-container">
          <div className="it-cta-text">
            <h1>Alcove is here for all your storage needs!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          </div>
          <div className="it-cta-form">
            <Form.Control
              type="text"
              placeholder="Enter zip code"
              className="it-search-input"
              maxLength="5"
              onChange={(event) => {
                change(event.target.value);
              }}
              onKeyPress={(event) => {
                if(event.key === 'Enter') {
                  const shouldRoute = search();
                  if(shouldRoute) history.push('/results');
                }
              }}
              value={newZip}
            />
            <button
              variant="outline-primary"
              onClick={() => {
                const shouldRoute = search();
                if (shouldRoute) history.push('/results');
              }}
              className="btn btn-outline-primary it-btn"
            >
              Find Storage Units
            </button>
            <LinkContainer to="/post">
              <button variant="outline-secondary" className="btn btn-outline-secondary it-btn">
                Post Items or Units
              </button>
            </LinkContainer>
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
}

export default LandingPage;

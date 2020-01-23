import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './LandingPage.css';

const LandingPage = ({ search, change, newZip, changePath }) => {
  const history = useHistory();

  useEffect(() => {
    changePath('/');
  }, []);

  return (
    <>
      <section className="it-section">
        <div className="it-container">
          <div className="it-cta-text">
            <h1>Alcove is the alternative storage solution.</h1>
            <p>Whether you have items needing a space or a space owner needing items, Alcove is the one stop shop for all your storage needs.</p>
          </div>
          <div className="it-cta-form">
            <h2>Search Listings</h2>
            <Form.Control
              type="text"
              placeholder="Enter zip code"
              className="it-search-input"
              maxLength="5"
              onChange={event => {
                change(event.target.value);
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  const shouldRoute = search();
                  if (shouldRoute) {
                    history.push('/results');
                    changePath('/results');
                  }
                }
              }}
              value={newZip}
            />
            <button
              onClick={() => {
                const shouldRoute = search();
                if (shouldRoute) {
                  history.push('/results');
                  changePath('/results');
                }
              }}
              className="btn btn-info it-btn"
            >
              Find Spaces or Items
            </button>
            <hr />
            <h2>Post a Listing</h2>
            <LinkContainer to="/post">
              <button className="btn btn-info it-btn" onClick={() => changePath('/posts')}>
                Post a Space or Item
              </button>
            </LinkContainer>
          </div>
        </div>
        <div className="it-image">
          <img className="it-cta-image" src="../../assets/landing-image.png" alt="Alcove Storage Image" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;

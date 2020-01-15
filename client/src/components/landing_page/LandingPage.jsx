import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: '',
      query: ''
    };
  }

  handleInput(evt) {
    const query = evt.target.value;
    if (query.match(/\d+/) || query === '') {
      this.setState({ query });
    }
  }

  handleKeypress(evt) {
    if (evt.key === 'Enter') {
      this.setState({ zip: evt.target.value, query: '' }, () => this.props.search(this.state.zip));
    } else {
      this.setState({ zip: this.state.query }, () => {
        this.setState({ query: '' });
        this.props.search(this.state.zip);
      });
    }
  }

  render() {
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
                onChange={this.handleInput.bind(this)}
                onKeyPress={evt => {
                  evt.key === 'Enter' ? this.handleKeypress(evt) : null;
                }}
                value={this.state.query}
              />
              <LinkContainer to="/results">
                <button
                  variant="outline-primary"
                  onClick={evt => {
                    this.handleKeypress(evt);
                  }}
                  className="btn btn-outline-primary it-btn"
                >
                  Find Storage Units
                </button>
              </LinkContainer>
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
}

export default LandingPage;

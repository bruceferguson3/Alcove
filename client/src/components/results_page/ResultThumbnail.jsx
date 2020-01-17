import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Results.css';

const ResultThumbnail = ({ listing, getSelectedListing }) => {
  const isSpace = listing.filters.type === 'space';
  const border = isSpace ? '4px solid #2fb5e9' : '4px solid #be97c6';

  return (
    <Card
      className="p-3"
      style={{
        width: '18rem',
        height: '24.6rem',
        border: border,
        cursor: 'default',
        margin: '0',
        marginLeft: '.5rem',
        marginBottom: '.5rem'
      }}
    >
      {listing.thumbs ? (
        <Card.Img
          variant="top"
          src={listing.thumbs[0]}
          style={{ height: '12rem' }}
        />
      ) : (
        <div className="flex-column thumbnail-no-image">
          No Images Available
        </div>
      )}
      <div className="results-thumbnail-price">
        <span className="results-thumbnail-number">
          ${listing.filters.price.toFixed(2)}
        </span>{' '}
        per day
      </div>
      <Card.Title className="results-thumbnail-title">
        {listing.title}
      </Card.Title>
      <Card.Text className="results-thumbnail-description">
        {listing.description.slice(0, 95) + '...'}
      </Card.Text>
      <LinkContainer
        className="thumbnail-button"
        to="/listing"
        onClick={() => getSelectedListing(listing)} // CHANGE TO ID ON REFACTOR
      >
        <Button variant="info" className="results-btn">View Listing</Button>
      </LinkContainer>
    </Card>
  );
};

export default ResultThumbnail;

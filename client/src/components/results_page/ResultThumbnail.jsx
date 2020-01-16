import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Results.css';

const ResultThumbnail = ({ listing, getSelectedListing }) => {
  const isSpace = listing.filters.type === 'space';
  const border = isSpace ? '3px solid skyblue' : '3px solid purple';

  return (
    <Card
      className="p-3"
      style={{
        width: '18rem',
        height: '27rem',
        border: border,
        cursor: 'default'
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
        <span className="results-thumbnail-number">${listing.filters.price.toFixed(2)}</span> per day
      </div>
      <Card.Title className="results-thumbnail-title">
        {listing.title}
      </Card.Title>
      <Card.Text className="results-thumbnail-description">
        {listing.description.slice(0, 85) + '...'}
      </Card.Text>
      <LinkContainer
        className="thumbnail-button"
        to="/listing"
        onClick={() => getSelectedListing(listing)} // CHANGE TO ID ON REFACTOR
      >
        <Button variant="info">See Full Listing</Button>
      </LinkContainer>
    </Card>
  );
};

export default ResultThumbnail;

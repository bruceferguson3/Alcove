import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ResultThumbnail = ({ listing, getSelectedListing }) => {
  const isSpace = listing.filters.listingType === 'space';
  const border = isSpace ? '3px solid skyblue' : '3px solid purple';

  return (
    <Card
      className="results-card p-3"
      style={{ width: '18rem', height: '20.5rem', border: border }}
    >
      <Card.Img
        variant="top"
        src={listing.thumbs[0]}
        style={{ height: '12rem' }}
      />
      <Card.Title className="results-thumbnail-title">
        {listing.title}
      </Card.Title>
      <div className="results-thumbnail-price">
        ${listing.filters.price} per day
      </div>
      {/* <Card.Text className="results-thumbnail-description">
        {listing.description}
      </Card.Text> */}
      <LinkContainer
        to="/listing"
        onClick={() =>  /* getSelectedListing(listing.id) */ 'FILL WHEN RESULTS FROM SERVER CLARIFIED'}
      >
        <Button variant="info">See Full Listing</Button>
      </LinkContainer>
    </Card>
  );};

export default ResultThumbnail;

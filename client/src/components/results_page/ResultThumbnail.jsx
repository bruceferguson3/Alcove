import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ResultThumbnail = ({ listing }) => (
  <Card style={{ width: '18rem', height: '10rem' }}>
    <Card.Img variant="top" src={listing.thumbs[0]} />
    <Card.Title>{listing.title}</Card.Title>
    <Card.Text>${listing.filters.price} /day</Card.Text>
    <Card.Text>{listing.description}</Card.Text>
    <LinkContainer to="/listing">
      <Button variant="info">See Full Listing</Button>
    </LinkContainer>
  </Card>
);

export default ResultThumbnail;

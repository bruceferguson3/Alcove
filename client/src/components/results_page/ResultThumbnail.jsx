import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ResultThumbnail = ({ listing }) => (
  <Card style={{ width: '18rem', height: '10rem' }}>
    <Card.Img variant="top" src={listing.thumbs[0]} />
    <Card.Title>{listing.title}</Card.Title>
    <Card.Text>Price: {listing.filters.price}</Card.Text>
    <Card.Text>{listing.description}</Card.Text>
    <Button variant="info">See Full Listing</Button>
  </Card>
);

export default ResultThumbnail;

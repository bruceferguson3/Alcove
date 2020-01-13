import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import dummyData from './dummyData.js';

const ListingImages = props => {
  let images = dummyData.test.data.thumbs;

  if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col>{images[0]}</Col>
          <Col>{images[1]}</Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>Hello, World!</div>
  )
};

export default ListingImages;

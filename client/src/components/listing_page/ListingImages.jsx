import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import dummyData from './dummyData.js';

const ListingImages = props => {
  let images = dummyData.test.data.thumbs;

  if (images.length === 1) {
    return (
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>{images[0]}</Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    )
  }

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

  if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col>{images[0]}</Col>
          <Col>{images[1]}</Col>
          <Col>{images[2]}</Col>
        </Row>
      </Container>
    )
  }

  if (images.length >= 5) {
    return (
      <Container>
        <Row>
          <Col md={4}>md=4</Col>
          <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>Hello, World!</div>
  )
};

export default ListingImages;

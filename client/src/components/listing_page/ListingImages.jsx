<<<<<<< HEAD
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ListingImages = ({ images }) => {
  if (images.length === 0) {
    return "";
  } else if (images.length === 1) {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col lg={6}>
            <img src={images[0]}></img>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  } else if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col>
            <img src={images[0]}></img>
          </Col>
          <Col>
            <img src={images[1]}></img>
          </Col>
        </Row>
      </Container>
    );
  } else if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col>
            <img src={images[0]}></img>
          </Col>
          <Col>
            <img src={images[1]}></img>
          </Col>
          <Col>
            <img src={images[2]}></img>
          </Col>
        </Row>
      </Container>
    );
  } else {
    <Container>
      <Row>
        <Col>
          <img src={images[0]}></img>
        </Col>
        <Col>
          <img src={images[1]}></img>
        </Col>
        <Col>
          <img src={images[2]}></img>
        </Col>
      </Row>
    </Container>;
  }

  return (
    <div>
      <div>Hello world</div>
    </div>
  );
=======
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
          <Col md={6}><img src={images[0]} /></Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    )
  }

  if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col><img src={images[0]} /></Col>
          <Col><img src={images[1]} /></Col>
        </Row>
      </Container>
    )
  }

  if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col><img src={images[0]} /></Col>
          <Col><img src={images[1]} /></Col>
          <Col><img src={images[2]} /></Col>
        </Row>
      </Container>
    )
  }

  if (images.length >= 5) {
    return (
      <Container>
        <Row>
          <Col md={6}><img src={images[0]} /></Col>
          <Col md={6}>
            <Row>
              <Col md={6}><img src={images[1]} /></Col>
              <Col md={6}><img src={images[2]} /></Col>
            </Row>
            <Row>
              <Col md={6}><img src={images[3]} /></Col>
              <Col md={6}><img src={images[4]} /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>Hello, World!</div>
  )
>>>>>>> be220bc7cd6eedd8be6d0c74249ae097537e24fd
};

export default ListingImages;

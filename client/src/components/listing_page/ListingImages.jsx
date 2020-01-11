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
};

export default ListingImages;

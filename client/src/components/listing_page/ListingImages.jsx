import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ListingModal from './ListingModal.jsx';
import './listingImages.css';

import dummyData from "./dummyData.js";
// import logo from '../../../dist/assets/alcove.jpg';

const ListingImages = props => {
  // Some elements require both inline styling and the stylesheet due to border positioning.

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let images = dummyData.test.data.thumbs;

  let image1 = images[0];
  let image2 = images[1];
  let image3 = images[2];
  let image4 = images[3];
  let image5 = images[4];

  if (images.length === 0) {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md={6}>
            <div id="emptyImage"></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }

  if (images.length === 1) {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md={6}>
            <img className="listingPicture" src={image1} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }

  if (images.length === 2) {
    return (
      <Container>
        <Row style={{ border: "1px solid #353b40" }}>
          <Col style={{ border: "1px solid #353b40" }}>
            <img src={images[0]} style={{ height: "12rem" }} />
          </Col>
          <Col style={{ border: "1px solid #353b40" }}>
            <img src={images[1]} style={{ height: "12rem" }} />
          </Col>
        </Row>
      </Container>
    );
  }

  if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col
            className="listingPictureContainer"
            style={{
              borderRight: "1px solid #353b40"
            }}
          >
            <img className="listingPicture" src={image1} />
          </Col>
          <Col className="listingPictureContainer">
            <img className="listingPicture" src={image2} />
          </Col>
          <Col
            className="listingPictureContainer"
            style={{
              borderLeft: "1px solid #353b40"
            }}
          >
            <img className="listingPicture" src={image3} />
          </Col>
        </Row>
      </Container>
    );
  }

  if (images.length >= 5) {
    return (
      <Container style={{ border: "1px solid purple" }}>
        <Row style={{ border: "1px solid purple" }}>
          <Col md={6} style={{ border: "1px solid purple" }}>
            <img src={images[0]} style={{ height: "12rem" }} />
          </Col>
          <Col md={6} style={{ border: "1px solid purple" }}>
            <Row style={{ border: "1px solid purple" }}>
              <Col md={6} style={{ border: "1px solid purple" }}>
                <img src={images[1]} style={{ height: "6rem" }} />
              </Col>
              <Col md={6} style={{ border: "1px solid purple" }}>
                <img src={images[2]} style={{ height: "6rem" }} />
              </Col>
            </Row>
            <Row style={{ border: "1px solid purple" }}>
              <Col md={6} style={{ border: "1px solid purple" }}>
                <img src={images[3]} style={{ height: "6rem" }} />
              </Col>
              <Col md={6} style={{ border: "1px solid purple" }}>
                <img src={images[4]} style={{ height: "6rem" }} />
                <Button onClick={handleShow} id="listingModalButton">
                  Launch the super cool modal!
                </Button>
                <ListingModal
                  images={images}
                  show={show}
                  handleClose={handleClose}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Button onClick={handleShow}>Launch the super cool modal!</Button>
      <ListingModal images={images} show={show} handleClose={handleClose} />
    </div>
  );
};

export default ListingImages;

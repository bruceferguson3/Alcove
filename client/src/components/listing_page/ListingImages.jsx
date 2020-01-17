import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ListingModal from './ListingModal.jsx';
import './Listing.css';

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
          <Col>
            <div className="imageSpacer"></div>
          </Col>
          <Col md={6} className="listingPictureContainer">
            <img src={image1} className="listingPicture" onClick={handleShow}/>
          </Col>
          <Col>
            <div className="imageSpacer"></div>
          </Col>
        </Row>
        <ListingModal
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col className="listingPictureContainer"
          style={{
            borderRight: "1px solid #353b40"
          }}>
            <img src={images[0]} className="listingPicture" onClick={handleShow} />
          </Col>
          <Col className="listingPictureContainer">
            <img src={images[1]} className="listingPicture" onClick={handleShow} />
          </Col>
        </Row>
        <ListingModal
          images={images}
          show={show}
          handleClose={handleClose}
        />
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
            <img src={image1} className="listingPicture" onClick={handleShow}/>
          </Col>
          <Col className="listingPictureContainer">
            <img src={image2} className="listingPicture" onClick={handleShow}/>
          </Col>
          <Col
            className="listingPictureContainer"
            style={{
              borderLeft: "1px solid #353b40"
            }}
          >
            <img src={image3} className="listingPicture" onClick={handleShow}/>
            <Button onClick={handleShow} id="listingModalButton" className="img-overlay">
              Launch the super cool modal!
            </Button>
          </Col>
        </Row>
        <ListingModal
          images={images}
          show={show}
          handleClose={handleClose}
        />
      </Container>
    );
  }

  if (images.length >= 5) {
    return (
      <Container>
        <Row>
        <Col
          md={6}
          className="listingPictureContainer"
          style={{
            borderRight: "1px solid #353b40"
          }}
        >
            <img src={images[0]}  />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
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

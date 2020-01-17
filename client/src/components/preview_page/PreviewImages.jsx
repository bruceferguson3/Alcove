import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './preview.css';

import dummyData from "./dummyData.js";
// import logo from '../../../dist/assets/alcove.jpg';

const ListingImages = props => {
  // Some elements require both inline styling and the stylesheet due to border positioning.

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
            <div className="imageSpacerLeft"></div>
          </Col>
          <Col md={6} className="listingPictureContainer">
            <img src={image1} className="listingPicture" />
          </Col>
          <Col>
            <div className="imageSpacerRight"></div>
          </Col>
        </Row>
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
            <img src={images[0]} className="listingPicture" />
          </Col>
          <Col className="listingPictureContainer">
            <img src={images[1]} className="listingPicture" />
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
            <img src={image1} className="listingPicture" />
          </Col>
          <Col className="listingPictureContainer">
            <img src={image2} className="listingPicture" />
          </Col>
          <Col
            className="listingPictureContainer"
            style={{
              borderLeft: "1px solid #353b40"
            }}
          >
            <img src={image3} className="listingPicture" />
          </Col>
        </Row>
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
            borderRight: "1px solid #353b40",
            height: "300px"
          }}
        >
            <img src={image1} className="listingPicture" />
          </Col>
          <Col md={6}>
            <Row>
              <Col
                md={6}
                className="listingPictureContainer"
                style={{
                  borderRight: "1px solid #353b40",
                  height: "150px"
                }}
              >
                <img src={image2} className="listingPicture" />
              </Col>
              <Col md={6}
                md={6}
                className="listingPictureContainer"
                style={{
                  height: "150px"
                }}
              >
                <img src={image3} className="listingPicture" />
              </Col>
            </Row>
            <Row>
              <Col md={6}
                className="listingPictureContainer"
                style={{
                  borderRight: "1px solid #353b40",
                  height: "150px"
                }}
              >
                <img src={image4} className="listingPicture" />
              </Col>
              <Col
                md={6}
                className="listingPictureContainer"
                style={{
                  height: "150px"
                }}
              >
                <img src={image5} className="listingPicture" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ListingImages;

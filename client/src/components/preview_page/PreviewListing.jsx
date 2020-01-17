import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import dummyData from './dummyData.js';
import PreviewProductInfo from './PreviewProductInfo.jsx';
import PreviewImages from './PreviewImages.jsx';
import ListingContactInfo from '../listing_page/ListingContactInfo.jsx';
import Listing from '../listing_page/Listing.jsx';
import ListingMap from '../listing_page/ListingMap.jsx';
import ListingImages from '../listing_page/ListingImages.jsx';
import './preview.css'

const PreviewListing = props => {
    return (
      <Container>
        <Row md={4}>
          <PreviewImages previewListing={props.stateData}/>
        </Row>
        <Row md={8}>
          <Col md={8}>
            <PreviewProductInfo previewListing={props.stateData} />
          </Col>
          <Col md={4}>
            <Row>
              <ListingContactInfo userInfo={props.stateData.userInfo}/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};

export default PreviewListing;
